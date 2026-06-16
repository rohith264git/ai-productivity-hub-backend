import { TaskService } from "../services/task-service";

export class TaskController {
  private taskService = new TaskService();

  getTasks(req: any, res: any) {
    const tasks = this.taskService.getTasks();
    res.json(tasks);
  }

  createTask(req: any, res: any) {
    const task = req.body;
    const createdTask = this.taskService.createTask(task);
    res.status(201).json(createdTask);
  }

  deleteTask(req: any, res: any) {
    const id = Number(req.params.id);
    this.taskService.deleteTask(id);
    res.json({
      message: "Task deleted",
    });
  }

  updateTask(req: any, res: any) {
    const id = Number(req.params.id);
    const updatedTask = req.body;
    const task = this.taskService.updateTask(id, updatedTask);
    res.json(task);
  }
}
