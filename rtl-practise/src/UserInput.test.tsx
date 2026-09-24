import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import UserInput from "./UserInput";

describe("UserInput component", () => {
  it("updates the name when the user types", async () => {
    const user = userEvent.setup();

    render(<UserInput />);

    const input = screen.getByLabelText("Name");

    await user.type(input, "Snehal");

    expect(
      screen.getByText("Hello, Snehal")
    ).toBeInTheDocument();
  });
});