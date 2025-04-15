import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    return res.status(200).json({ status: "ok", message: "Server is healthy" });
  });
  
  // API routes
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate the request body
      const result = insertLeadSchema.safeParse(req.body);
      
      if (!result.success) {
        const errorMessage = fromZodError(result.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Save the lead in storage
      const lead = await storage.createLead(result.data);
      
      // Return the created lead
      return res.status(201).json({ 
        message: "Thank you for signing up! We'll be in touch soon.",
        lead 
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again later." 
      });
    }
  });

  // Get all leads - only for demonstration purposes
  app.get("/api/leads", async (_req, res) => {
    try {
      const leads = await storage.getAllLeads();
      return res.status(200).json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({ 
        message: "An error occurred while fetching leads." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
