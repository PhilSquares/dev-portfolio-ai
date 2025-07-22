# DevPortfolio AI 🧠💼  
An AI-powered portfolio and resume builder for developers.

---

## 🧰 Tech Stack  
- **Frontend**: React  
- **Backend**: Node.js + Express  
- **AI**: OpenAI API (with optional mock fallback)  
- **Styling**: TBD (TailwindCSS or styled-components)  
- **Hosting**: GitHub Pages / Vercel / Render  

---

## ✨ Features  
- 🔍 AI-generated portfolio summaries  
- 🧠 Resume bullet points based on GitHub projects  
- 🚀 One-click copy/paste to LinkedIn or Resume  

---

## 🔐 OpenAI API Key Required  
To run this project locally in live AI mode, you must create an `.env` file inside the `server/` folder with the following:  
```env
OPENAI_API_KEY=your-own-openai-api-key-here
```

You can get your key from:  
👉 [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

---

## 🔧 Running Locally  

You can run this project locally in **two modes**:

---

### ✅ Option 1: With OpenAI API Access (Live Mode)

1. In the `server/` directory, create a `.env` file with:

   ```env
   OPENAI_API_KEY=your-openai-api-key-here
   MOCK_MODE=false
   CLIENT_URL=http://localhost:3000
   ```

2. Start the frontend and backend servers in separate terminals:

   ```bash
   # Start frontend
   cd client
   npm install
   npm start
   ```

   ```bash
   # Start backend
   cd server
   npm install
   npm run dev
   ```

---

### 🧪 Option 2: Without OpenAI (Mock Mode for Development)

If you don’t have an API key or just want to test locally without API usage:

1. In the `server/` directory, create a `.env` file with:

   ```env
   MOCK_MODE=true
   CLIENT_URL=http://localhost:3000
   ```

2. Start the backend and frontend:

   ```bash
   cd server
   npm install
   npm run dev
   ```

   ```bash
   cd ../client
   npm install
   npm start
   ```

✅ You’ll see mock AI-generated results — perfect for fast development and testing.

---

> 💡 **Tip**: Be sure to add `.env` to your `.gitignore` to keep sensitive information private.