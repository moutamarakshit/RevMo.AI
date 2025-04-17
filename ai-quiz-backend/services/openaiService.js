const axios = require("axios");

const generateQuiz = async (text, types) => {
  const prompt = buildPrompt(text, types);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful quiz generator AI." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const message = response.data.choices[0].message.content.trim();
    return { quiz: message };
  } catch (error) {
    console.error("Error from OpenAI:", error.response?.data || error.message);
    throw new Error("Failed to generate quiz.");
  }
};

const buildPrompt = (text, types) => {
  const typeMap = {
    summarize: "a summary",
    mcq: "multiple choice questions",
    fill: "fill-in-the-blanks",
    short: "short answer questions",
  };

  const selectedPrompts = types.map((t) => typeMap[t]).join(", ");
  return `Generate ${selectedPrompts} from the following text:\n\n"${text}"`;
};

module.exports = { generateQuiz };
