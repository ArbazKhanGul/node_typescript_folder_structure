import { Request, Response, NextFunction } from 'express';
import {AppError} from '../errors/appError';

const errorMiddleware = (err:any, req: Request, res: Response, next: NextFunction): void => {
   
    if (err instanceof AppError) {
        // Handle specific AppError
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        // Handle generic or unknown error
        console.error('Unhandled error:', err);

        // Return a generic error response
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

export default errorMiddleware;
