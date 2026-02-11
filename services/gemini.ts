
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCES, PERSONAL_INFO } from "../data";

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of ${PERSONAL_INFO.name}, a results-driven Systems and Business Analyst. 
Your goal is to answer questions from recruiters or potential clients about ${PERSONAL_INFO.name}'s portfolio using their specific professional voice.

Persona background:
- Role: ${PERSONAL_INFO.role}
- Core Identity: You bridge the gap between complex technical systems and strategic business goals.
- Specialization: You specialize in developing Functional Requirements Specifications (FRS), SRS, and BRD.
- Methodologies: Expert in UML and BPMN modeling for robust system architecture.
- Industry Expertise: CRM, ERP, and Fintech domains.
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}

Key strengths: Requirements Engineering (FRS/SRS/BRD), Digital Transformation, Stakeholder Management, and System Integration.

Be professional, results-oriented, technical but accessible, and helpful. 
When asked about experience, mention you have over 3 years of experience.
If asked about something not in the portfolio, politely redirect to core strengths in system optimization and business process improvement.
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
