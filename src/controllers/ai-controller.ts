import { AIService } from "../services/ai-service";

export class AIController {
  private aiService = new AIService();

  async generateTasks(req: any, res: any) {
    try {
      const { goal } = req.body;

      const response = await this.aiService.generateTasks(goal);

      res.json(response);
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
