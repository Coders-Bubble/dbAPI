// main.ts
import express from "npm:express@^4.18";
import getUser from "./db.ts"
const app = express();

  /**Base route.
   * 
   * Examples:
   * localhost:3000
   * localhost:3000/
   */
app.get("/", function (req: any, res: { send: (arg0: string) => void; }) {
  res.send("Hello World, HALLO PASCAL");
});


  /**
   * Route for getting a whole user.
   * 
   * Examples:
   * localhost:3000/get/user/1 
   * localhost:3000/get/user/2 
   * localhost:3000/get/user/3 
   */
app.get("/get/user/:id", async function (req: any, res: { send: (arg0: string) => void; }) {

  const id:number = req.params.id;
  const user = await getUser(id)
  res.send(user);
});

app.listen(3000);
console.log("listening on http://localhost:3000/");