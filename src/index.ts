import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Configuration OpenAI
const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-4-turbo-preview',
  temperature: 0.7
});

// Routes
app.get('/', (_req, res) => {
  res.json({ message: 'Bienvenue dans l\'API Crew_devteam_1' });
});

app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    
    const response = await model.invoke([
      new HumanMessage({
        content: `En tant qu'équipe de développement, comment devrions-nous aborder cette tâche : ${task}`
      })
    ]);

    res.json({ 
      success: true, 
      result: response.content 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Une erreur est survenue' 
    });
  }
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 