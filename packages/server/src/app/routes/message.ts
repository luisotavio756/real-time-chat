import { Router } from 'express';
import MessageController from '@app/controllers/MessageController';

const messageRoutes = Router();

messageRoutes.post('/messages', MessageController.store);

export default messageRoutes;
