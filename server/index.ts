import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();
registerRoutes(app);

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(`Error: ${message}`);
  res.status(status).json({ message });
});

// Vercel handler
export default (req: any, res: any) => {
  app(req, res);
};
