// main.ts
import express from "npm:express@^4.18";
const app = express();

app.get("/", function (req: any, res: { send: (arg0: string) => void; }) {
  res.send("Hello World, HALLO PASCAL");
});

app.listen(3000);
console.log("listening on http://localhost:3000/");