import { Octokit } from '@octokit/core';

const GetRepos = async (token: string, username: string) => {
    const octokit = new Octokit({ auth: token });
    const { data } = await octokit.request('GET /users/{username}/repos', { username });

    return data;
};

export default GetRepos;
