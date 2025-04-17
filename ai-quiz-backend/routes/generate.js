import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

dotenv.config();


const router = express.Router();


router.post('/generate', async (req, res) => {
  const { inputText, selectedTypes } = req.body;

  if (!inputText || selectedTypes.length === 0) {
    return res.status(400).json({ error: 'Missing input or quiz type' });
  }


  
  const prompt = `Generate ONLY the following types of quiz questions based on this text: "${inputText}"
  
IMPORTANT: Generate ONLY these specific question types that were selected: ${selectedTypes.join(', ')}
Do NOT generate any other question types.

For each selected type, format as follows:
${selectedTypes.includes('Summary') ? '- Summary: Provide a brief summary of the text' : ''}
${selectedTypes.includes('Multiple Choice') ? '- MCQs: Create multiple choice questions with options A, B, C, D' : ''}
${selectedTypes.includes('Fill in the Blanks') ? '- Fill in the blanks: Create fill-in-the-blank questions with underscores for blanks' : ''}
${selectedTypes.includes('Short Questions') ? '- Short Questions: Create short answer questions from every line of the text' : ''}

Include ONLY the selected question types above and ignore any other formats.`;
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173", 
        "X-Title": "AI Quiz Generator"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",  
        messages: [
          { role: "system", content: "You are a quiz generator AI." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    if (data?.choices?.[0]?.message?.content) {
      res.json({ quiz: data.choices[0].message.content });
    } else {
      console.error("Unexpected response:", data);
      res.status(500).json({ error: "Failed to generate quiz." });
    }
  } catch (error) {
    console.error("Error in /generate route:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});


export default router;