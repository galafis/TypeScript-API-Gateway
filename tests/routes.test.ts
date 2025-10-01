import request from 'supertest';
import express from 'express';
import { setupRoutes } from '../src/routes';

const app = express();
setupRoutes(app);

describe('GET /', () => {
    it('should return a welcome message and author information', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            message: 'Enterprise API Gateway Service',
            author: 'Gabriel Demetrios Lafis',
            version: '1.0.0'
        });
    });
});

