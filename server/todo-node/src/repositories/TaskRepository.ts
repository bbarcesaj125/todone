import { AppDataSource } from "../data-source";
import { Task } from "../entities/Task";

interface TaskItem {
  title: string;
  description?: string;
  complete: boolean;
}

export const TaskRepository = AppDataSource.getRepository(Task).extend({
  findByName(title: string) {
    return this.createQueryBuilder("task")
      .where("task.title = :title", { title })
      .getMany();
  },
  upSert(task: TaskItem[]) {
    return this.createQueryBuilder("task")
      .insert()
      .into(Task)
      .values(task)
      .orUpdate({
        conflict_target: ["title"],
        overwrite: ["title", "description", "complete"],
      })
      .returning("*")
      .execute();
  },
});
