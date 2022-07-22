import { Router } from "express";
import TaskController from "../controllers/taskController";

const tasksRouter = Router();
const taskController = new TaskController();

tasksRouter.get("/tasks", taskController.getTasks);
tasksRouter.post("/task", taskController.saveTask);

export default tasksRouter;
