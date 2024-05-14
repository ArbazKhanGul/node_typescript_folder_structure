import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const validate = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch (error:any) {
        let errorDetail=error.errors[0].message;
        const err= new AppError(errorDetail, 400);
        console.log("🚀 ~ validate ~ err:", err instanceof AppError) 
        next(err);
    }

}

export default validate ;