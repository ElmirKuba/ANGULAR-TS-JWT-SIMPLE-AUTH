export type IAuthType = 'register' | 'login';

export interface IAuthData {
  username: string;
  password: string;
}

export interface IAuthReturn {
  status: number;
  ok: boolean;
  error: {
    error: string;
    message: string;
    statusCode: number;
  };
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
