import * as service from './task.service.js';
export async function list(req,res) { const limit=Math.min(Number(req.query.limit)||20,100); const offset=Math.max(Number(req.query.offset)||0,0); res.json({data:await service.getTasks({limit,offset})}); }
export async function getById(req,res) { res.json({data:await service.getTask(req.params.id)}); }
export async function create(req,res) { res.status(201).json({data:await service.addTask(req.validated.body)}); }
