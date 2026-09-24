import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders the initial count", () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments the count when the button is clicked", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const button = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});