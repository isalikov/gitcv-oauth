import { Response, Request } from 'express';
import httpStatus from 'http-status';

import { getGithubToken } from '../../github';

const routeGithubSuccess = async (req: Request, res: Response) => {
    const { code } = req.query;

    if (!code) {
        res.status(httpStatus.BAD_REQUEST).send(httpStatus['BAD_REQUEST']);

        return;
    }

    const githubToken = await getGithubToken(code as string);

    if (!githubToken) {
        res.status(httpStatus.UNAUTHORIZED).send(httpStatus['UNAUTHORIZED']);

        return;
    }

    res.redirect(`${process.env.APP_CALLBACK_URL}?at=session_token`);
};

export default routeGithubSuccess;
