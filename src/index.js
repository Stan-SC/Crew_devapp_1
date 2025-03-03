require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Crew } = require('crewai');
const agents = require('./agents');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Création de l'équipe
const devTeam = new Crew({
  agents: [
    agents.projectManager,
    agents.promptManager,
    agents.softwareArchitect,
    agents.backendDeveloper,
    agents.frontendDeveloper,
    agents.devOpsEngineer
  ],
  tasks: [],
  verbose: true
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue dans l\'API Crew_devteam_1' });
});

app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    const result = await devTeam.kickoff(task);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 