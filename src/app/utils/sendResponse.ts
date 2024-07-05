import { Response } from 'express';

export type TSendResponseProps<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  res: Response;
};

export const sendResponse = <T>({
  data,
  message,
  statusCode,
  success,
  res,
}: TSendResponseProps<T>) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
