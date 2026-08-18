// src/api/contracts.ts
import apiClient from "./client";
import type { Contract } from "../types/contract";

export const getContracts = async (): Promise<Contract[]> => {
  const { data } = await apiClient.get<Contract[]>("/contracts");
  return data;
};