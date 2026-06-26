import { Router } from "express";
import { AIController } from "../controllers/ai-controller";

const router = Router();

const aiController = new AIController();

router.post("/generate", aiController.generateTasks.bind(aiController));

export default router;
