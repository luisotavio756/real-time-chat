import { Router } from 'express';
import MessageController from '@app/controllers/MessageController';

const messageRoutes = Router();

messageRoutes.post('/', MessageController.store);

export default messageRoutes;
