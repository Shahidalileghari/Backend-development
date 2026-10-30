import { z } from 'zod';
export const createTaskSchema=z.object({body:z.object({title:z.string().trim().min(1).max(160),description:z.string().trim().max(2000).optional()}),params:z.object({}),query:z.object({})});
export const taskIdSchema=z.object({body:z.object({}),params:z.object({id:z.string().uuid()}),query:z.object({})});
