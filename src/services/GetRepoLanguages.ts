import { Octokit } from '@octokit/core';

const GetRepoLanguages = async (token: string, owner: string, repo: string) => {
    const octokit = new Octokit({ auth: token });
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/languages', { owner, repo });

    return data;
};

export default GetRepoLanguages;
