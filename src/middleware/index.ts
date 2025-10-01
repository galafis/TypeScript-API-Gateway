import { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const setupMiddleware = (app: Application) => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet());
    app.use(morgan('dev'));

    console.log('✅ Middleware configured');
};

