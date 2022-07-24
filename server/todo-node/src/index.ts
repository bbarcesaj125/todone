import * as dotenv from "dotenv";
import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./data-source";
import { Task } from "./entities/Task";
import { TaskRepository } from "./repositories/TaskRepository";
import tasksRouter from "./routes/tasks";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );

    // Variables
    if (!process.env.PORT) {
      process.exit(1);
    }

    // ExpressJS setup
    const PORT: number = parseInt(process.env.PORT, 10);
    const app: Application = express();

    // Middlewares
    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use("/api", tasksRouter);

    // Error handling
    app.use((err, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).send("Internal server error!");
    });

    // Server
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
