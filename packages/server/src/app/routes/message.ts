import { Router } from 'express';
import MessageController from '@app/controllers/MessageController';

const messageRoutes = Router();

messageRoutes.get('/', MessageController.index);
messageRoutes.post('/', MessageController.store);

export default messageRoutes;
