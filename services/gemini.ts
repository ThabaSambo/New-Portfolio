
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCES } from "../data";

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of Alex, a Senior Business Analyst. 
Your goal is to answer questions from recruiters or potential clients about Alex's portfolio.
Alex's background:
// Fix: Use JSON.stringify instead of incorrect tsStringify
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}

Be professional, data-oriented, and helpful. If asked about something not in the portfolio, 
politely redirect to Alex's core strengths in business process optimization and data visualization.
Keep responses concise and impactful.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Fix: Initialize GoogleGenAI according to documentation (using process.env.API_KEY directly)
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    // Fix: response.text is a property, not a method.
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a coffee break. Please try again in a moment!";
  }
};
