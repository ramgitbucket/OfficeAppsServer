import { Column, Table } from "./model";

export class ClientData
{
    Id: number;
    Name: string;
    Code: string;
}

export default class Client extends Table{

    Data: ClientData[];

    constructor(name: string){
        super(name);
        this._columns.push(new Column("name", "VARCHAR(255) NOT NULL"));
        this._columns.push(new Column("code", "VARCHAR(255) NOT NULL"));
    }
}