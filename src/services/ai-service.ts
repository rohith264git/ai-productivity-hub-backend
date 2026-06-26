import openai from "../config/openai";
import { buildTaskPrompt } from "../ai/prompt";
import Task from "../models/task.model";

export class AIService {
  async generateTasks(goal: string) {
    const prompt = buildTaskPrompt(goal);

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    try {
      const tasks = JSON.parse(response.output_text);

      const savedTasks = [];

      for (const task of tasks) {
        const savedTask = await Task.create(task);
        savedTasks.push(savedTask);
      }

      return savedTasks;
    } catch {
      throw new Error("AI returned invalid JSON.");
    }
  }
}
