import { Column, Table } from "./model";
import { ClientTaskData } from "./ClientTask";

export class WorkData
{
    Id: number;
    ClientId: number;
    UserId: number;
    In: Date;
    Out: Date;
    Tasks: ClientTaskData[];
}

export default class Work extends Table{

    Data: WorkData[];

    constructor(name: string){
        super(name);
        this._columns.push(new Column("client_id", "INT NOT NULL"));
        this._columns.push(new Column("user_id", "INT NOT NULL"));
        this._columns.push(new Column("in_time", "DATETIME NOT NULL"));
        this._columns.push(new Column("out_time", "DATETIME NOT NULL"));
    }

}