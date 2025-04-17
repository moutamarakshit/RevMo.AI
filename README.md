# RevMo.AI

**RevMo.AI – Memorize Faster, Revise Smarter**  
An AI‑powered quiz generator that turns any paragraph into MCQs, fill‑in‑the‑blanks, and short questions to help you study and retain information more effectively.

---

## 🚀 Features

- **Generate MCQs**: Multiple choice questions with correct answers.  
- **Fill‑in‑the‑Blanks**: Cloze‑style questions for active recall.  
- **Short Answer**: Open‑ended questions to test deeper understanding.  
- **Easy Toggle**: Select one or more question types with a single click.  
- **Live Preview**: See results as soon as the AI responds.  

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite  
- **Backend**: Node.js + Express  
- **AI Engine**: OpenRouter / OpenAI GPT‑3.5‑Turbo  
- **Styling**: CSS Modules  
- **Environment**: dotenv, CORS

---

## 🔧 Getting Started

### 1. Clone the repo
git clone https://github.com/moutamarakshit/RevMo.AI.git

cd RevMo.AI

### 2. Setup & run the backend
cd ai-quiz-backend
cp .env.example .env
#### Edit .env and set your OPENAI_API_KEY:
#### OPENAI_API_KEY=sk-or-v1-YOUR_NEW_KEY
npm install
npm run dev

- **Backend will be running at http://localhost:5000.

### 3. Setup & run the frontend
cd ../ai-quiz-generator
npm install
npm run dev
- **Open your browser at http://localhost:5173.

