import { Router } from 'express';

import routeGithubOAuth from './routeGithubOAuth';
import routeGithubSuccess from './routeGithubSuccess';

const routes = Router();

routes.get('/github/oauth', routeGithubOAuth);
routes.get('/github/success', routeGithubSuccess);

export default routes;
