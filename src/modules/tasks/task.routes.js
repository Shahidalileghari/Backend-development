import { Router } from 'express';
import * as c from './task.controller.js';
import { validate } from '../../middleware/validate.js';
import { createTaskSchema,taskIdSchema } from './task.schema.js';
export const taskRouter=Router();
taskRouter.get('/',c.list);
taskRouter.post('/',validate(createTaskSchema),c.create);
taskRouter.get('/:id',validate(taskIdSchema),c.getById);
