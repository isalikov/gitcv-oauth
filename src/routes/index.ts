import { Router } from 'express';

import auth from './auth';

import { NotFound } from '../middlewares';

const routes = Router();

routes.use('/auth', auth);

routes.use('*', NotFound);

export default routes;
