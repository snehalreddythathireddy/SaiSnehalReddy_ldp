import axios from "axios";
import { getContracts, getCurrentUser } from "./index";
import type { Contract } from "../types/contract";
import type { User } from "../types/user";

jest.mock("axios");

const mockedGet = (axios as any).get as jest.Mock;

afterEach(() => {
  mockedGet.mockReset();
});

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
    mockedGet.mockResolvedValue({ data: contracts });

    const result = await getContracts();

    expect(mockedGet).toHaveBeenCalledWith("/contracts");
    expect(result).toEqual(contracts);
  });
});

describe("getCurrentUser", () => {
  it("fetches and returns the current user from the API", async () => {
    const user: User = {
      id: 1,
      name: "Kane Cooper",
      role: "Admin",
      avatarSrc: "/profile.png",
    };
    mockedGet.mockResolvedValue({ data: user });

    const result = await getCurrentUser();

    expect(mockedGet).toHaveBeenCalledWith("/me");
    expect(result).toEqual(user);
  });
});