import { Column, Table } from "./model";

export class ClientTaskData
{
    Id: number;
    WorkId: number;
    TaskId: number;
    PeriodFrom: Date;
    PeriodTo: Date;
}

export default class ClientTask extends Table{

    Data: ClientTaskData[];

    constructor(name: string){
        super(name);
        this._columns.push(new Column("work_id", "INT NOT NULL"));
        this._columns.push(new Column("task_id", "INT NOT NULL"));
        this._columns.push(new Column("period_from", "DATETIME NOT NULL"));
        this._columns.push(new Column("period_to", "DATETIME NOT NULL"));
    }
}