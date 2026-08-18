import apiClient from "./client";
import { getCurrentUser } from "./user";
import type { User } from "../types/user";

jest.mock("./client");

const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("getCurrentUser", () => {
  it("fetches and returns the current user from the API", async () => {
    const user: User = {
      id: 1,
      name: "Kane Cooper",
      role: "Admin",
      avatarSrc: "/profile.png",
    };
    mockedApiClient.get.mockResolvedValue({ data: user });

    const result = await getCurrentUser();

    expect(mockedApiClient.get).toHaveBeenCalledWith("/me");
    expect(result).toEqual(user);
  });
});