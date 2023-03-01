import { Column, Table } from "./model";

export class TaskData
{
    Id: number;
    Name: string;
}

export default class Task extends Table{

    Data: TaskData[];

    constructor(name: string){
        super(name);
        this._columns.push(new Column("name", "VARCHAR(255) NOT NULL"));
    }
}