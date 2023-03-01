import { Application } from 'express-serve-static-core';
import { Request, Response } from 'express';
import {works} from '../database/config';
import { Table } from '../database/models/model';
import { WorkData } from '../database/models/Work';


export async function Save(req: Request, res: Response){
    console.log(req.body);
    works.save<WorkData>(works.GetName(), req.body); // Correct this;
    res.send({});
} 