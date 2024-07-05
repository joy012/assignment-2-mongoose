import { NextFunction, Request, Response } from 'express';

type THandlerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const errorHandlingAsync = (handlerFn: THandlerFn) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handlerFn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
