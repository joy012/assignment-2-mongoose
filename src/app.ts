import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";

export const app: Application = express();

app.use(express.json());
app.use(cors);

app.use("/api", router);

// not found error handle
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
