import { Response, Request } from 'express';

const AuthGetGithubRedirect = async (_: Request, res: Response) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
};

export default AuthGetGithubRedirect;
