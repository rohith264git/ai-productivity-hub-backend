export const buildTaskPrompt = (goal: string) => `
You are an AI Productivity Assistant.

Generate a task plan for the following goal:

"${goal}"

Rules:

- Return ONLY a valid JSON array.
- Your response must start with [ and end with ]
- Do not include any text before or after the JSON.
- Do NOT return markdown.
- Do NOT return explanations.
- Generate between 2 and 3 tasks.
- Each task must contain exactly these fields:

title
priority
status

Rules for each field:

- title: short and meaningful.
- priority: High, Medium or Low.
- status must ALWAYS be exactly "Pending".

Example:

[
  {
    "title": "Learn Angular Components",
    "priority": "High",
    "status": "Pending"
  }
]
`;
