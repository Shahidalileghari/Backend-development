import { app } from './app.js'; import { env } from './config/env.js'; import { closeDatabase } from './config/database.js';
const server=app.listen(env.PORT,()=>console.info(`API listening on ${env.PORT} (${env.NODE_ENV})`));
async function shutdown(signal) { console.info(`${signal} received`); server.close(async error=>{ try { await closeDatabase(); process.exit(error?1:0); } catch(e) { console.error(e); process.exit(1); } }); setTimeout(()=>process.exit(1),10000).unref(); }
process.on('SIGTERM',()=>shutdown('SIGTERM')); process.on('SIGINT',()=>shutdown('SIGINT'));
