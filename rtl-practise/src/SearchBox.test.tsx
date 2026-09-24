import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SearchBox from "./SearchBox";

describe("SearchBox component", () => {
  it("renders the search input", () => {
    render(<SearchBox />);

    expect(
      screen.getByPlaceholderText("Search products")
    ).toBeInTheDocument();
  });

  it("renders the search button", () => {
    render(<SearchBox />);

    expect(
      screen.getByRole("button", { name: "Search" })
    ).toBeInTheDocument();
  });
});