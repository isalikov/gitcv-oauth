import { Router } from 'express';
import httpStatus from 'http-status';

import auth from './auth';

const routes = Router();

routes.use('/', auth);

routes.use('*', (_, res) => {
    res.status(httpStatus.NOT_FOUND).send(httpStatus['NOT_FOUND']);
});

export default routes;
