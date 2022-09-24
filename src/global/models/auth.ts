export type AuthLoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    password_reset_token: string;
    password_reset_expires: string;
    created_at: string;
  };
  token: string;
  refreshToken: string;
};

export type RefreshTokenResponse = {
  token: string;
};

export type AuthStorageData = {
  id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
};
