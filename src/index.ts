import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectMongoDB from "./database/connect";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req: Request, res: Response) => {
  res.status(201).json({
    message: `Testing health api`,
  });
});

connectMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`App is Running on ${port}`);
  });
});
