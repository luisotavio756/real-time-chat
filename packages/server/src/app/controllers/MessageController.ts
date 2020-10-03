import { Response, Request } from 'express';

export default {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, message } = request.body;

    return response.json({
      name,
      message,
    });
  },
};
