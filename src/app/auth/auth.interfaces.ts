export type IAuthType = 'register' | 'login';

export interface IAuthData {
  username: string;
  password: string;
}

export interface IAuthReturn {
  error: boolean;
  message: string;
  user: {
    id: string;
    username: string;
    roles: string[];
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
