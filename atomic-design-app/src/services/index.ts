import axios from "axios";
import type { Contract } from "../types/contract";
import type { User } from "../types/user";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const getContracts = async (): Promise<Contract[]> => {
  const { data } = await apiClient.get<Contract[]>("/contracts");
  return data;
};

export const getCurrentUser = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/me");
  return data;
};