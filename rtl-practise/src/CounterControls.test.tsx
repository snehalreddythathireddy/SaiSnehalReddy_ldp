import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CounterControls from "./CounterControls";

describe("CounterControls component", () => {
  it("shows the initial count", () => {
    render(<CounterControls />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments the count", async () => {
    const user = userEvent.setup();

    render(<CounterControls />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("decrements the count", async () => {
    const user = userEvent.setup();

    render(<CounterControls />);

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(decrementButton);

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });
});