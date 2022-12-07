// main.ts
import express from "npm:express@^4.18";
import getUser from "./db.ts"
const app = express();

app.get("/", function (req: any, res: { send: (arg0: string) => void; }) {
  res.send("Hello World, HALLO PASCAL");
});

app.get("/get/user/:id", async function (req: any, res: { send: (arg0: string) => void; }) {

  const id:number = req.params.id;
  const user = await getUser(id)
  res.send(user);
});

app.listen(3000);
console.log("listening on http://localhost:3000/");