import { z, ZodObject } from 'zod/v4';
import { NextFunction, Response, Request } from 'express';

const validateZod = (zodSchema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
  const { data, error } = zodSchema.safeParse(req.body);
  if (error) {
    next(new Error(z.prettifyError(error), { cause: 400 }));
  } else {
    req.sanitizedBody = data as SanitizedBody;
    next();
  }
};

export default validateZod;
