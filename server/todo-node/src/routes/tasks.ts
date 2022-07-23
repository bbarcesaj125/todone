import { Router } from "express";
import TaskController from "../controllers/taskController";

const tasksRouter = Router();
const taskController = new TaskController();

tasksRouter.get("/tasks", taskController.getTasks);
tasksRouter.post("/tasks", taskController.saveTasks);

export default tasksRouter;
