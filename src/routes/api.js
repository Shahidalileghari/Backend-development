import { Router } from 'express';
import { taskRouter } from '../modules/tasks/task.routes.js';
export const apiRouter=Router();
apiRouter.get('/',(_req,res)=>res.json({data:{name:'Backend Development Mastery API',version:'v1'}}));
apiRouter.use('/tasks',taskRouter);
