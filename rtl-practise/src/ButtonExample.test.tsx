import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ButtonExample from "./ButtonExample";

describe("ButtonExample component", () => {
  it("renders the heading", () => {
    render(<ButtonExample label="Submit" />);

    expect(
      screen.getByRole("heading", { name: "Button Example" })
    ).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<ButtonExample label="Submit" />);

    expect(
      screen.getByRole("button", { name: "Submit" })
    ).toBeInTheDocument();
  });
});