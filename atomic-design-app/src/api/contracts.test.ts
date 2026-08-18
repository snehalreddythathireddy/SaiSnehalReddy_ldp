import apiClient from "./client";
import { getContracts } from "./contracts";
import type { Contract } from "../types/contract";

jest.mock("./client");

const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("getContracts", () => {
  it("fetches and returns contracts from the API", async () => {
    const contracts: Contract[] = [
      {
        id: 1,
        name: "Contract 1",
        type: "Monthly",
        perPayment: 100,
        termLength: 12,
        availableCredit: 1000,
        payment: 1000,
        checked: false,
      },
    ];
    mockedApiClient.get.mockResolvedValue({ data: contracts });

    const result = await getContracts();

    expect(mockedApiClient.get).toHaveBeenCalledWith("/contracts");
    expect(result).toEqual(contracts);
  });
});