import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Always use process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConstructionAdvice = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please configure the API_KEY environment variable.");
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are a senior construction project manager and structural engineer for "Structure & Form". 
      Your goal is to provide preliminary, high-level advice to potential clients.
      
      Rules:
      1. Be professional, concise, and safety-conscious.
      2. If the query is about a project (e.g., "build a deck"), provide:
         - A rough breakdown of phases (Planning, Foundation, Framing, Finishing).
         - Key material considerations.
         - A safety tip.
      3. Do not give specific price quotes (use ranges or "varies widely").
      4. Always end by suggesting they schedule a full consultation for accurate details.
      5. Format the output with clear headings or bullet points. Markdown is allowed.
      6. Keep the response under 200 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to contact the AI consultation service.");
  }
};