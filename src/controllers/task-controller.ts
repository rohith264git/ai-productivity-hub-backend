import { TaskService } from "../services/task-service";

export class TaskController {
  private taskService = new TaskService();

  async getTasks(req: any, res: any) {
    const tasks = await this.taskService.getTasks();

    res.json(tasks);
  }

  async createTask(req: any, res: any) {
    const task = req.body;

    const createdTask = await this.taskService.createTask(task);

    res.status(201).json(createdTask);
  }

  async deleteTask(req: any, res: any) {
    const id = req.params.id;

    await this.taskService.deleteTask(id);

    res.json({
      message: "Task deleted",
    });
  }

  async updateTask(req: any, res: any) {
    const id = req.params.id;

    const updatedTask = req.body;

    const task = await this.taskService.updateTask(id, updatedTask);

    res.json(task);
  }
}
