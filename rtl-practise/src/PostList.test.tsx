import { render, screen } from "@testing-library/react";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import PostList from "./PostList";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("PostList component", () => {
  it("shows posts after fetching", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => [
        {
          id: 1,
          title: "React Testing",
        },
        {
          id: 2,
          title: "Vitest",
        },
      ],
    } as Response);

    render(<PostList />);

    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("React Testing")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Vitest")
    ).toBeInTheDocument();
  });

  it("shows an error when fetching posts fails", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(
      new Error("Network error")
    );

    render(<PostList />);

    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Failed to fetch posts")
    ).toBeInTheDocument();
  });
});