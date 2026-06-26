import "dotenv/config";
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task-routes";
import connectDB from "./config/db";
import authRoutes from "./routes/auth-routes";
import aiRoutes from "./routes/ai-routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
