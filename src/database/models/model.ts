import mysql from 'mysql';

export class Column {
    name: string;
    type: string;

    constructor(name: string, type: string)
    {
        this.name = name;
        this.type = type;
    }
}

export class Table {

    protected _columns: Column[];
    protected _name: string;
    public static conn: mysql.Connection;

    constructor(name: string)
    {
        this._name = name;
        this._columns = [];
        this._columns.push(new Column("id", "INT NOT NULL AUTO_INCREMENT"));
    }

    public GetColumns(){
        return [...this._columns];
    }

    public GetName(){
        return this._name;
    }

    public save<T>(name: string, data: T[]){
        Table.conn.query(`INSERT INTO ${name} VALUES (${
            data.map((d)=>{
                return `${d}, `;
            })
        })`,
            (err, result)=>{
                if(err) throw err;
                console.log("Table data saved: ", result);
            }
        );
    }
    
}