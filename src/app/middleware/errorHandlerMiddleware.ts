import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { ZodError } from 'zod';

export const errorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultError = {
    success: false,
    statusCode: 500,
    message: err.message || 'Something went wrong!',
  };

  // check if the error is an instance of ZodError
  if (err instanceof ZodError) {
    // simplify the error message
    const simplifiedErrMessage = err.issues.map((issue) => {
      return `${issue.message}`;
    });

    defaultError.statusCode = 500;

    // join the error messages by new line
    defaultError.message = simplifiedErrMessage.join(' || ');
  }

  res.status(defaultError.statusCode).json({
    success: defaultError.success,
    message: defaultError.message,
  });
};
