import { Request, Response } from "express";
import { TaskRepository } from "../repositories/TaskRepository";

export default class TaskController {
  async getTasks(req: Request, res: Response) {
    const tasks = await TaskRepository.find();
    return res.json(tasks);
  }
  async saveTask(req: Request, res: Response) {
    const task = await TaskRepository.upSert(req.body);
    return res.send(task);
  }
}
