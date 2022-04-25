import { Router } from 'express';
import httpStatus from 'http-status';

import github from './github';

const routes = Router();

routes.use('/github', github);

routes.use('*', (_, res) => {
    res.status(httpStatus.NOT_FOUND).send(httpStatus['NOT_FOUND']);
});

export default routes;
