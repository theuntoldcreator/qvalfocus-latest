import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  interest: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true),
  website: z.string().optional() // Honeypot field
});

const newsletterSchema = z.object({
  email: z.string().email()
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Check honeypot
      if (data.website) {
        return res.status(400).json({ message: "Invalid submission" });
      }
      
      // TODO: Integrate with CRM (HubSpot, Salesforce, etc.)
      // TODO: Send email notification
      console.log("Contact form submission:", data);
      
      res.json({ 
        message: "Contact form submitted successfully",
        id: `contact_${Date.now()}`
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        message: "Invalid form data",
        error: error instanceof z.ZodError ? error.errors : "Unknown error"
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = newsletterSchema.parse(req.body);
      
      // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
      console.log("Newsletter subscription:", data.email);
      
      res.json({ 
        message: "Successfully subscribed to newsletter",
        email: data.email
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        message: "Invalid email address",
        error: error instanceof z.ZodError ? error.errors : "Unknown error"
      });
    }
  });

  // ROI Calculator endpoints (for potential data persistence/analytics)
  app.post("/api/roi/cloud", async (req, res) => {
    try {
      const { currentSpend, apps, timeline } = req.body;
      
      // TODO: Log calculation for analytics
      console.log("Cloud ROI calculation:", { currentSpend, apps, timeline });
      
      res.json({ message: "ROI calculation logged" });
    } catch (error) {
      console.error("ROI calculation error:", error);
      res.status(500).json({ message: "Error processing ROI calculation" });
    }
  });

  app.post("/api/roi/qa", async (req, res) => {
    try {
      const { teamSize, salary, automationPercent } = req.body;
      
      // TODO: Log calculation for analytics
      console.log("QA ROI calculation:", { teamSize, salary, automationPercent });
      
      res.json({ message: "ROI calculation logged" });
    } catch (error) {
      console.error("ROI calculation error:", error);
      res.status(500).json({ message: "Error processing ROI calculation" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
