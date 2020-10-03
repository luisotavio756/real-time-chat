import { Response, Request } from 'express';
import Message from '@app/schemas/MessageSchema';
import { emitMessage } from '../../web-socket';

export default {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, text } = request.body;

    try {
      const message = await Message.create({
        name,
        text,
      });

      emitMessage('room', 'new-message', message);

      return response.json(message);
    } catch (error) {
      return response.status(400).json({
        error: 'Ocorreu algum erro',
      });
    }
  },
};
