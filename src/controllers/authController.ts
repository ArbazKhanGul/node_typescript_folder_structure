import { NextFunction, Request, Response } from "express";

import {myDataSource} from "../config/app-data-source"
import { User } from "../entity/user";

import { AppError } from "../errors/appError";

export const register= async (req:Request,res:Response,next:NextFunction) :Promise<void>=> {

    try{

        const {userName,email,password}=req.body;
        let file=req.file;
        console.log("🚀 ~ register ~ file:", file)
        console.log("🚀 ~ register ~ password:", password)
        console.log("🚀 ~ register ~ email:", email)
        console.log("🚀 ~ register ~ username:", userName)

        const user =  myDataSource.getRepository(User).create({...req.body})
        const results = await myDataSource.getRepository(User).save(user)
         

      res.status(201).json({message:"user created successfully"})
    }
    catch(err){
        const error = new AppError('Error in creating user', 400);
        next(error);
    }
}

export const login= async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try{
    res.status(201).json({message:"user login successfully"})
    }
    catch(error){

    }
}