// main.ts
import express from "npm:express@^4.18";
import { getUser, comparePassword} from "./db.ts"
const app = express();

  /**Base route.
   * 
   * Examples:
   * localhost:3000
   * localhost:3000/
   */

app.get("/", function (_req: any, res: { send: (arg0: string) => void; }) {
  res.send("Hello World, HALLO PASCAL");
});


  /**Route for getting a whole user.
   * 
   * Examples:
   * localhost:3000/get/user?id=1 
   * localhost:3000/get/user?id=2
   * localhost:3000/get/user?id=3
   */

app.get("/get/user", async function (req: any, res: { send: (arg0: string) => void; }) {

  const id:number = req.query.id;
  console.log("getting user " + id)
  const user = await getUser(id)
  res.send(user);
});

/**Route for comparing a given Password to one in the db.
   * 
   * Examples:
   * localhost:3000/get/?id=1&?password=123
   * localhost:3000/get/?id=1&?password=321
   */

 app.get("/get/:id/:password", async function (req: any, res: { send: (arg0: string) => void; }) {

  const id:number = req.query.id;
  const passwordToTest:string = req.query.password
  res.send(await comparePassword(id,passwordToTest));
});


app.listen(3000);
console.log("Listening on http://localhost:3000/");