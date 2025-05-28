import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  process.env.NODE_ENV !== 'production' && console.error(err.stack);
  res.status((err.cause as number) || 500).json({ error: err.message });
};
export default errorHandler;
