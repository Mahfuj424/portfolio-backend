import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middleware/notFoundRoute";
import errorMiddleware from "./app/middleware/globalErrorHandler";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://portfolio-black-phi-46.vercel.app",
      "https://portfolio-dashboard-eight-alpha.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Enable credentials if needed
    allowedHeaders: ["Content-Type", "Authorization"], // Customize allowed headers
  })
);

app.use("/api/v1", router);

const test = async (req: Request, res: Response) => {
  res.send({ message: "Portfolio server is running😍" });
};

app.get("/", test);

app.use(notFound);
app.use(errorMiddleware);

export default app;
