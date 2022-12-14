import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts";

const db = await new Client().connect({

    hostname: "localhost",
    username: "root",
    db: "usermanagement",
    password: "codersbayroot"
  });

  /** Gets a whole user from the db.
   * 
   * @param id is used to find the user in the database.
   * @return is a Json of the whole user from the database.
   */

  export async function getUser(id:number):Promise<string>{

    const user = await db.query(`select * from user where user_id = ?`,[id]);
    return JSON.stringify(user[0]);
  }


  /** Gets a short user from the db.
   * 
   * A short user consists of firstname lastname, and a profile picture
   * @param id is used to find the user in the database.
   * @return is a Json of the whole user from the database.
   */
  export async function getShortUser(id:number):Promise<string>{

    const user = await db.query(`select first_name, last_name, user_picture from user where user_id = ?`,[id]);
    return JSON.stringify(user[0]);
  }
  
  /** Gets a users theme from the db.
   * 
   * @param id is used to find the user in the database.
   * @return is a Json of the whole user from the database.
   */

export async function gettheme(id:number):Promise<string>{

  const theme = await db.query(`select theme from user where user_id = ?`,[id]);
  return theme;
}

  /** Gets the user password from the db and compares it to the given password.
   * 
   * @param id is used to find the user in the database.
   * @param passwordToTest is the password that should be compared to the password saved in the database.
   * @return A Json with matches as key for a bool. Which indicates of the passwords match.
   */

  export async function comparePassword(id:number, passwordToTest:string):Promise<string>{

    const passwordFromDB = await db.query(`select password from user where user_id = ?`,[id]);
    const json = JSON.stringify(["matches",passwordToTest == passwordFromDB[0]["password"]])
    return json;
  }

  /* 
  tests
  */


