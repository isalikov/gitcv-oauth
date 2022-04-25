import { Router } from 'express';

import AuthGetGithubRedirect from './AuthGetGithubRedirect';
import AuthHandleGithubCallback from './AuthHandleGithubCallback';

const routes = Router();

routes.get('/github', AuthGetGithubRedirect);
routes.get('/github/oauth', AuthHandleGithubCallback);

export default routes;
