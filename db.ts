import { Client } from "https://deno.land/x/mysql/mod.ts";

let db = await new Client().connect({

    hostname: "localhost",
    username: "root",
    db: "usermanagement",
    password: "codersbayroot",
  });

  export default async function getUser(id:number){

    const user = await db.query(`select * from user where user_id = ?`,[id]);
    return JSON.stringify(user[0]);
  }
