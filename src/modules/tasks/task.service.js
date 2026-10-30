import * as repo from './task.repository.js';
import { HttpError } from '../../utils/http-error.js';
export const getTasks=(pagination)=>repo.listTasks(pagination);
export async function getTask(id) { const task=await repo.findTaskById(id); if(!task) throw new HttpError(404,'Task not found'); return task; }
export const addTask=(input)=>repo.createTask(input);
