import { Request, Response, NextFunction } from "express";
import TaskController from "../controllers/taskController";

describe("Task routes", () => {
  it("responds to a GET request", async () => {
    const mockNext: NextFunction = jest.fn();
    const taskController = new TaskController();
    const req = {} as Request;
    const res = { json: jest.fn() } as unknown as Response;

    await taskController.getTasks(req, res, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
  it("responds to a fetch request", async () => {
    const mockNext: NextFunction = jest.fn();
    const taskController = new TaskController();
    const req = {
      body: [
        {
          title: "Title",
          description: "Description test",
          complete: false,
        },
      ],
    } as Request;
    const res = { send: jest.fn() } as unknown as Response;

    await taskController.saveTasks(req, res, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
