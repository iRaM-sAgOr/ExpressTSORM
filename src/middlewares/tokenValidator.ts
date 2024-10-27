import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a custom interface for the Request object to include user data if needed
interface CustomRequest extends Request {
  user?: string | object;
}

const jwtSecret = process.env.JWT_SECRET || 'your_secret_key_here';

const jwtValidator = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    // Attach the decoded token to the request object
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default jwtValidator;