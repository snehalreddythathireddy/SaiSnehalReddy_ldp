import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders Hello React", () => {
    render(<App />);

    expect(screen.getByText("Hello React")).toBeInTheDocument();
  });
});