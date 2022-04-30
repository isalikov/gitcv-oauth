import dotenv from 'dotenv-flow';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

dotenv.config();

import routes from './routes';
import redis from './services/redis';

const main = async () => {
    const isDevelop = process.env.NODE_ENV !== 'production';

    await redis.connect();

    const app = express();
    const server = http.createServer(app);

    app.use(
        rateLimit({
            windowMs: 60 * 1000,
            max: 100,
            standardHeaders: true,
            legacyHeaders: false,
        }),
    );

    app.use(cors());
    app.use(bodyParser.json());
    app.use(morgan(isDevelop ? 'dev' : 'common'));
    app.use(routes);
    server.listen(process.env.PORT);
};

main().catch(console.error);
