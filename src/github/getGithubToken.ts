import axios from 'axios';
import { GithubOAuthResponse } from '../types/github';

const getGithubToken = async (code: string): Promise<string> => {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    return axios
        .post<null, GithubOAuthResponse>(
            `https://github.com/login/oauth/access_token`,
            { client_id, client_secret, code },
            { headers: { accept: 'application/json' } },
        )
        .then((res) => res.data.access_token);
};

export default getGithubToken;
