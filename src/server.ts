import express from 'express';
import { setupRoutes } from './routes';
import { setupMiddleware } from './middleware';
import { setupConfig } from './config';

const app = express();

// Setup configuration
setupConfig();

// Setup middleware
setupMiddleware(app);

// Setup routes
setupRoutes(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Enterprise API Gateway Service running on port ${PORT}`);
    console.log('👨‍💻 Created by Gabriel Demetrios Lafis');
});

