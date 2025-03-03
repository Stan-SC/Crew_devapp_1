# Crew_devteam_1

Une task force hautement spécialisée pour le développement d'applications web, utilisant CrewAI pour orchestrer une équipe d'agents intelligents.

## Structure de l'équipe

- **Project Manager** : Pilote la roadmap et coordonne l'équipe
- **Prompt Manager** : Optimise les interactions avec les IA
- **Software Architect** : Conçoit l'architecture technique
- **Backend Developer** : Développe les API et la logique métier
- **Frontend Developer** : Crée les interfaces utilisateur
- **DevOps Engineer** : Gère les déploiements sur Render

## Installation

```bash
npm install
```

## Configuration

Créez un fichier `.env` avec les variables suivantes :
```
OPENAI_API_KEY=votre_clé_openai
GITHUB_API_TOKEN=votre_token_github
RENDER_API_KEY=votre_clé_render
```

## Démarrage

```bash
npm start
```

## Utilisation de l'API

### Créer une nouvelle tâche

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"task": "Créer une nouvelle fonctionnalité X"}'
```

## Déploiement

L'application est configurée pour un déploiement automatique sur Render. Il suffit de :

1. Créer un nouveau service Web sur Render
2. Connecter votre dépôt GitHub
3. Utiliser les paramètres du fichier `render.yaml`
4. Configurer les variables d'environnement dans le dashboard Render

## Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request 