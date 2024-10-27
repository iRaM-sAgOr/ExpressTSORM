import { Request, Response, NextFunction } from 'express';

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }
  next();
};

export default validateRequest;