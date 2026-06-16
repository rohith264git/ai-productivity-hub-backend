export class TaskService {
  private tasks = [
    {
      title: "Complete Angular",
      priority: "High",
      status: "Pending",
    },
    {
      title: "Build Backend",
      priority: "Medium",
      status: "In Progress",
    },
  ];

  getTasks() {
    return this.tasks;
  }

  createTask(task: any) {
    this.tasks.push(task);
    return task;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number, updatedTask: any) {
    this.tasks[index] = updatedTask;
    return this.tasks[index];
  }
}
