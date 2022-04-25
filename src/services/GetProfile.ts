import { Octokit } from '@octokit/core';

const GetProfile = async (token: string) => {
    const octokit = new Octokit({ auth: token });
    const { data } = await octokit.request('GET /user');

    return data;
};

export default GetProfile;
