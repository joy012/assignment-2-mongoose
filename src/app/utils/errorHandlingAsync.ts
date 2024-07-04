import { NextFunction, Request, Response } from 'express';

export const errorHandlingAsync = (
  handlerFn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handlerFn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
