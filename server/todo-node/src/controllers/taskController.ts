import { Request, Response, NextFunction } from "express";
import { TaskRepository } from "../repositories/TaskRepository";

export default class TaskController {
  async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await TaskRepository.find();
      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  }
  async saveTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await TaskRepository.upSert(req.body);
      return res.send(task);
    } catch (error) {
      next(error);
    }
  }
}
