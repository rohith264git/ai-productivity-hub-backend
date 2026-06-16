import { Router } from "express";
import { TaskController } from "../controllers/task-controller";

const router = Router();
const taskController = new TaskController();

router.get("/tasks", (req, res) => {
  taskController.getTasks(req, res);
});

router.post("/tasks", (req, res) => {
  taskController.createTask(req, res);
});

router.delete("/tasks/:id", (req, res) => {
  taskController.deleteTask(req, res);
});

router.put("/tasks/:id", (req, res) => {
  taskController.updateTask(req, res);
});

export default router;
