import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("renders the user's name", () => {
    render(<Greeting name="Snehal" />);

    expect(screen.getByText("Hello, Snehal")).toBeInTheDocument();
  });

  it("renders the welcome message", () => {
    render(<Greeting name="Snehal" />);

    screen.debug();

    expect(
      screen.getByText("Welcome to our application")
    ).toBeInTheDocument();
  });
});