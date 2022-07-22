import * as dotenv from "dotenv";
import express from "express";
import { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./data-source";
import { Task } from "./entities/Task";
import { TaskRepository } from "./repositories/TaskRepository";
import tasksRouter from "./routes/tasks";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const userx = await TaskRepository.findOneBy({
      id: 1,
    });
    console.log("TEST: ", userx);
    console.log("Inserting a new user into the database...");
    const task = new Task();
    const json = [
      { title: "dsdsd", description: "ddsds", complete: false },
      { title: "ssss", description: "", complete: false },
      { title: "cdkdkdk", description: "", complete: false },
      { title: "nmndnc", description: "cmmcmcmc", complete: false },
      { title: "ddd", description: "ddd", complete: true },
      { title: "Reading", description: "Read a book", complete: true },
      { title: "Writing", description: "", complete: false },
      { title: "Github", description: "Fix issues", complete: false },
      { title: "mmmmn", description: "mmmm", complete: true },
      { title: "Shopping", description: "Go shopping", complete: false },
      { title: "dddd", description: "dddd", complete: true },
      { title: "mmmm", description: "", complete: false },
      { title: "nmdksmfmf", description: "", complete: true },
      { title: "mmdmd", description: "", complete: true },
      { title: "nmdks", description: "", complete: false },
      { title: "Nmdks", description: "", complete: false },
    ];
    const Upserted = await TaskRepository.upSert(json);
    console.log("Saved tasks with upSert: " + JSON.stringify(Upserted));

    console.log("Loading users from the database...");
    const userList = await AppDataSource.manager.find(Task);
    console.log("Loaded users: ", userList);

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

    // Server
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
