const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config({ path: './server/.env' }); 

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// AI route
app.post('/generate', async (req, res) => {
  const { githubLink, resume, jobDescription } = req.body;

  try {
    const prompt = `
    Based on the following input, generate 3 high-quality portfolio-ready bullet points for a software engineer's resume:

    GitHub Link or Project Description:
    ${githubLink}

    Resume Excerpt:
    ${resume}

    Job Description:
    ${jobDescription}

    Format them as clear, professional resume bullets using action verbs and quantifiable impact if possible.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const result = response.choices[0].message.content;
    res.json({ result });
  } catch (error) {
    console.error('Error generating content:', error.message);
    res.status(500).json({ error: 'Failed to generate content.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
