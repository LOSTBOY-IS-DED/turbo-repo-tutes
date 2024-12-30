import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/signup", (req: Request, res: Response) => {
  res.send("Hi there");
});
app.get("/signin", (req: Request, res: Response) => {
  res.send("Hi there");
});
app.get("/chat", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.listen(3001, () => {
  console.log("server started !!!");
});
