# English Oral Speaking Training

This is a web application designed to help users improve their English oral speaking skills using OpenAI's API. The application provides various exercises, including role play scenarios, like job interviews and roles in novels. Users can have oral conversations with AI-generated characters and receive feedback on different aspects of their conversation, such as cohesion, relevance, and vocabulary.

## Tech Stack

- Frontend: React, Bootstrap
- Backend: Node.js, Express
- Database: MongoDB
- Hosting: Microsoft Azure
- CI/CD: Azure Pipelines

## Features

- User registration and authentication
- English oral speaking exercises
- Role play scenarios with AI-generated characters
- Instant feedback on user's conversation
- Progress tracking and gamification

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB Atlas account or local MongoDB instance
- Git Bash (for Windows users)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/english-speaking-training.git
```

2. Install the dependencies for the frontend:
```bash
cd english-speaking-training/client
npm install
```

3. Install the dependencies for the backend:
```bash
cd ../server
npm install
```

4. Create a .env file in the server folder with the following environment variables:
```bash
OPENAI_API_KEY=<your_openai_api_key>
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
```
Replace <your_openai_api_key>, <your_mongodb_connection_string>, and <your_jwt_secret_key> with the appropriate values.

### Running the Application
1. Start the frontend development server:
```bash
cd english-speaking-training/client
npm start
```

2. Start the backend server:
```bash
cd ../server
node src/app.js
```

3. Open your browser and navigate to http://localhost:3000. The application should be up and running.

## Contributing
Please read the CONTRIBUTING.md file for details on how to contribute to this project.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.