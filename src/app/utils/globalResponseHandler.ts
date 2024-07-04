import { Response } from "express";

export type TGlobalResponseHandler<T> = {
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
}: TGlobalResponseHandler<T>) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
