import { z } from "zod";

// Schema for the raw, nested response from your AI API
const ResponseSchema = z.object({
  success: z.boolean(),
  query: z.string(),
  answer: z.string().optional(),
  metadata: z.object({}).optional(),
  deconstructed: z.object({}).optional(),
  verified_url: z.object({}).optional(),
  error: z.string().optional(),
  suggestion: z.string().optional(),
  message: z.string().optional(),
});

// This is the type that  application will use internally.
export type CleanResponse = z.infer<typeof ResponseSchema>;
