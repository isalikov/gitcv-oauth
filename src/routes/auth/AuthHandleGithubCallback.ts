import { Response, Request } from 'express';
import httpStatus from 'http-status';

import { GetOAuthToken, GetProfile, GetRepoLanguages, GetRepos } from '../../services';

const AuthHandleGithubCallback = async (req: Request, res: Response) => {
    const { code } = req.query;

    if (!code) {
        res.status(httpStatus.BAD_REQUEST).send(httpStatus['BAD_REQUEST']);

        return;
    }

    const token = await GetOAuthToken(code as string);

    if (!token) {
        res.status(httpStatus.UNAUTHORIZED).send(httpStatus['UNAUTHORIZED']);

        return;
    }

    const profile = await GetProfile(token);
    const repos = await GetRepos(token, profile.login);

    const languages = await Promise.all(repos.map((repo) => GetRepoLanguages(token, profile.login, repo.name)));

    res.json(languages);
};

export default AuthHandleGithubCallback;
