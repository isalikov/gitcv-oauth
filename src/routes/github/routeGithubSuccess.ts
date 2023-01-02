import { Response, Request } from 'express';
import httpStatus from 'http-status';
import crypto from 'crypto';

import redis from '../../services/redis';
import { getGithubToken, getGithubUser } from '../../github';

const routeGithubSuccess = async (req: Request, res: Response) => {
    const { code } = req.query;

    if (!code) {
        res.sendStatus(httpStatus.BAD_REQUEST);

        return;
    }

    const githubToken = await getGithubToken(code as string);

    if (!githubToken) {
        res.sendStatus(httpStatus.UNAUTHORIZED);

        return;
    }

    const githubUser = await getGithubUser(githubToken);

    const sessionToken = crypto.createHash('sha256').update(githubToken, 'utf8').digest('hex');

    await redis.hSet(sessionToken, githubUser.id, githubToken);

    res.redirect(`${process.env.APP_CALLBACK_URL}/${sessionToken}`);
};

export default routeGithubSuccess;
