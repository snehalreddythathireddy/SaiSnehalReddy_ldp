import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ConditionalMessage from "./ConditionalMessage";

describe("ConditionalMessage component", () => {
  it("does not show the secret message initially", () => {
    render(<ConditionalMessage />);

    expect(
      screen.queryByText("Secret message")
    ).not.toBeInTheDocument();
  });

  it("shows the secret message after clicking the button", async () => {
    const user = userEvent.setup();

    render(<ConditionalMessage />);

    const button = screen.getByRole("button", {
      name: "Toggle Message",
    });

    await user.click(button);

    expect(
      screen.getByText("Secret message")
    ).toBeInTheDocument();
  });
});