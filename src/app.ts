import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middleware/notFoundRoute";
import errorMiddleware from "./app/middleware/globalErrorHandler";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const test = async (req: Request, res: Response) => {
  res.send({ message: "Portfolio server is running😍" });
};

app.get("/", test);

app.use(notFound);
app.use(errorMiddleware);

export default app;
