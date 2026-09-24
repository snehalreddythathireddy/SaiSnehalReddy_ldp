import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AsyncCounter from "./AsyncCounter";

describe("AsyncCounter component", () => {
  it("updates the count after clicking the button", async () => {
    const user = userEvent.setup();

    render(<AsyncCounter />);

    const button = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });
  });
});