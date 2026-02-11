
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCES, PERSONAL_INFO } from "../data";

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of ${PERSONAL_INFO.name}, a Senior Systems and Business Analyst. 
Your goal is to answer questions from recruiters or potential clients about ${PERSONAL_INFO.name}'s portfolio.
Persona background:
- Role: ${PERSONAL_INFO.role}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}

Key strengths: Bridging the gap between IT and Business, UML/BPMN modeling, System Architecture, Requirements Engineering (SRS/BRD), and Data Analysis.

Be professional, data-oriented, technical but accessible, and helpful. If asked about something not in the portfolio, 
politely redirect to core strengths in system optimization and business process improvement.
Keep responses concise and impactful.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
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
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a coffee break. Please try again in a moment!";
  }
};
