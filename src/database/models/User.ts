import { Column, Table } from "./model";

export class UserData
{
    Id: number;
    Name: string;
    UserName: string;
    Password: string;
}

export default class User extends Table{

    Data: UserData[];

    constructor(name: string){
        super(name);
        this._columns.push(new Column("name", "VARCHAR(255) NOT NULL"));
        this._columns.push(new Column("username", "VARCHAR(255) NOT NULL"));
        this._columns.push(new Column("passwd", "VARCHAR(255) NOT NULL"));
    }
}