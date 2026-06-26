import { Router } from "express";
import { TaskController } from "../controllers/task-controller";
import { authMiddleware } from "../middleware/auth-middleware";

const router = Router();

const taskController = new TaskController();

router.get(
  "/tasks",
  authMiddleware,
  taskController.getTasks.bind(taskController),
);

router.post(
  "/tasks",
  authMiddleware,
  taskController.createTask.bind(taskController),
);

router.put(
  "/tasks/:id",
  authMiddleware,
  taskController.updateTask.bind(taskController),
);

router.delete(
  "/tasks/:id",
  authMiddleware,
  taskController.deleteTask.bind(taskController),
);

export default router;
