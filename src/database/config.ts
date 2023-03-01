
import mysql from 'mysql';
import Client from './models/Client';
import ClientTask from './models/ClientTask';
import { Table } from './models/model';
import Task from './models/Task';
import User from './models/User';
import Work from './models/Work';

export const tasks = new Task("tasks");
export const clients = new Client("clients");
export const works = new Work("works");
export const clienttasks = new ClientTask("clienttasks");
export const users = new User("users");

const tables: Table[] = [
    tasks,
    clients,
    works,
    clienttasks
];

export default function ConnectMySQL(recreateTables: boolean){

    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "myroot"
    });
    
    conn.connect((err)=>{
        if(err) throw err;
        console.log("Connected to MySQL");
    });

    conn.query("CREATE DATABASE IF NOT EXISTS officeapps",
        (err, result)=>{
            if(err) throw err;
            console.log("Database created: ", result);
        }
    );

    conn.query("USE officeapps",
        (err, result)=>{
            if(err) throw err;
            console.log("Database selected: ", result);
    });

    Table.conn = conn;

    tables.forEach((table)=>{
        const columns = table.GetColumns();

        if(recreateTables)
        {
            conn.query(`DROP TABLE IF EXISTS ${table.GetName()}`,(err, result)=>{
                if(err) throw err;
                console.log("Recreating Tables");
            });
        }

        conn.query(`CREATE TABLE IF NOT EXISTS ${table.GetName()}(
            ${columns.map((c)=>{
                return c.name + " " + c.type;
            })}, PRIMARY KEY(id)
        )`,
            (err, result)=>{
                if(err) throw err;
                console.log(`Table name ${table.GetName()} initialized`);
            }
        );
    });

}