import { query } from '../../config/database.js';
export async function listTasks({limit=20,offset=0}={}) { const r=await query('SELECT id,title,description,status,created_at FROM tasks ORDER BY created_at DESC LIMIT $1 OFFSET $2',[limit,offset]); return r.rows; }
export async function findTaskById(id) { const r=await query('SELECT id,title,description,status,created_at FROM tasks WHERE id=$1',[id]); return r.rows[0]??null; }
export async function createTask({title,description=null}) { const r=await query('INSERT INTO tasks(title,description) VALUES($1,$2) RETURNING id,title,description,status,created_at',[title,description]); return r.rows[0]; }
