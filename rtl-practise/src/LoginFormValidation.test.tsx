import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import LoginFormValidation from "./LoginFormValidation";

describe("LoginFormValidation component", () => {
  it("renders the login form", () => {
    render(<LoginFormValidation />);

    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Email")).toBeInTheDocument();

    expect(screen.getByLabelText("Password")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });

  it("shows validation error when fields are empty", async () => {
    const user = userEvent.setup();

    render(<LoginFormValidation />);

    const button = screen.getByRole("button", {
      name: "Login",
    });

    await user.click(button);

    expect(
      screen.getByText("Email and password are required")
    ).toBeInTheDocument();
  });

  it("shows success message when valid data is submitted", async () => {
    const user = userEvent.setup();

    render(<LoginFormValidation />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const button = screen.getByRole("button", {
      name: "Login",
    });

    await user.type(emailInput, "snehal@example.com");
    await user.type(passwordInput, "123456");

    await user.click(button);

    expect(
      screen.getByText("Login successful")
    ).toBeInTheDocument();
  });
});