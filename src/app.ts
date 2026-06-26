import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task-routes";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth-routes";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api", taskRoutes);
app.use("/api/auth", authRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
