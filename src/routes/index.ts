import { Router } from 'express';
import { Application } from 'express';

export const setupRoutes = (app: Application) => {
    const router = Router();

    router.get('/', (req, res) => {
        res.json({
            message: 'Enterprise API Gateway Service',
            author: 'Gabriel Demetrios Lafis',
            version: '1.0.0'
        });
    });

    app.use('/', router);
};

