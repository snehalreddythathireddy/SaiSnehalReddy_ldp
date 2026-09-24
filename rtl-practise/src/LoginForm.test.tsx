import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  it("renders the email input", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders the password input", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });
});