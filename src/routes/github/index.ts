import { Router } from 'express';

import routeGithubOAuth from './routeGithubOAuth';
import routeGithubSuccess from './routeGithubSuccess';

const routes = Router();

routes.get('/oauth', routeGithubOAuth);
routes.get('/success', routeGithubSuccess);

export default routes;
