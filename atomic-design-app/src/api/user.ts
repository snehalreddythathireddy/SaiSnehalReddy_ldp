// src/api/user.ts
import apiClient from "./client";
import type { User } from "../types/user";

export const getCurrentUser = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/me");
  return data;
};