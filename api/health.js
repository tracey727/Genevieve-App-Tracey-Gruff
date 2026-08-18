import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  const base = {
    ok: true,
    service: 'genevieve-dog-park-stage1',
    structure: 'first-structure-2026-08-18'
  };

  if (!process.env.DATABASE_URL) {
    return response.status(200).json({
      ...base,
      database: 'not-configured',
      stage: 'structure-ready'
    });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`SELECT structure_version, stage_label, status FROM stage1.app_foundation WHERE id = 1`;
    const foundation = rows[0] ?? null;
    return response.status(foundation ? 200 : 503).json({
      ...base,
      database: foundation ? 'connected' : 'foundation-missing',
      stage: foundation?.stage_label ?? null,
      status: foundation?.status ?? null,
      databaseStructure: foundation?.structure_version ?? null
    });
  } catch (error) {
    console.error('Stage 1 database health check failed', error instanceof Error ? error.message : 'unknown-error');
    return response.status(503).json({
      ...base,
      ok: false,
      database: 'unavailable'
    });
  }
}
