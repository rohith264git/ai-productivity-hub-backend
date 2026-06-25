import Task from "../models/task.model";

export class TaskService {
  async getTasks() {
    return await Task.find();
  }

  async createTask(task: any) {
    return await Task.create(task);
  }

  async deleteTask(id: string) {
    return await Task.findByIdAndDelete(id);
  }

  async updateTask(id: string, updatedTask: any) {
    return await Task.findByIdAndUpdate(id, updatedTask, { new: true });
  }
}
