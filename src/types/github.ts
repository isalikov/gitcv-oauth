import { GenericAxiosResponse } from './request';

export type GithubOAuthResponse = GenericAxiosResponse<{ access_token: string }>;
