import { apiClient } from "./client";

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
}

export const signUp = async (payload: SignUpPayload) => {
  try {
    const response = await apiClient.post<SignUpResponse>(
      "/auth/register",
      payload,
    );
    return response.data;
  } catch {
    console.error("Error signing up:");
  }
};
