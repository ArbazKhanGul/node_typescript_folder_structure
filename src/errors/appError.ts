
export class AppError extends Error {
   
   statusCode: number;
   status: string;
   isOperational: boolean;

   constructor(message: string, statusCode?: number) {
       super(message);
       this.statusCode = statusCode || 500;
       this.status = String(this.statusCode).startsWith('4') ? 'error' : 'failed';
       this.isOperational = true;

       // Ensure the stack trace is captured correctly
       Error.captureStackTrace(this, this.constructor);
       
       Object.setPrototypeOf(this, AppError.prototype);
   }
}

