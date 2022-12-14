// main.ts
import express from "npm:express@^4.18" // maybe use as export in depts.ts 
import { getUser, comparePassword, getShortUser} from "./db.ts"

const app = express();

  /**Base route.
   * 
   * Examples:
   * localhost:3000
   * localhost:3000/
   */

app.get("/", function (_req: express.Request, res: {setHeader: any; send: (arg0: string) => void; }) {

  res.setHeader('Content-Type', 'application/json');
  res.send("Hello World, HALLO PASCAL");
});


  /**Route for getting a whole user.
   * 
   * Examples:
   * localhost:3000/get/user?id=1 
   * localhost:3000/get/user?id=2
   * localhost:3000/get/user?id=3
   * localhost:3000/get/user?id=1&full=0
   */

  app.get("/get/user", async function (req: express.Request, res: {setHeader: any; send: (arg0: string) => void; }) {
  res.setHeader('Content-Type', 'application/json');
  const id:number = req.query.id;
  let user= "";

  if(req.query.full){

    user = await getUser(id);

  }else{

    user = await getShortUser(id);
  }
  
  res.send(user);
});

/**Route for comparing a given Password to one in the db.
   * 
   * Examples:
   * http://localhost:3000/get/login?email=marlene.wiesmair@gmail.com&?password=123
   * http://localhost:3000/get/login?email=marlene.wiesmair@gmail.com&?password=343
   */

 app.get("/get/login", async function (req: express.Request, res: {setHeader: any; send: (arg0: string) => void; }) {
  
  res.setHeader('Content-Type', 'application/json');
  const email:string = req.query.email;
  const passwordToTest:string = req.query.password
  res.send(await comparePassword(email,passwordToTest));
});

// Start our server on the desired port.
const PORT = 3000;
app.listen(PORT);
console.log(`API server is running on port ${PORT} Listening on http://localhost:3000/`);