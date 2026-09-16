import { render, screen } from "@testing-library/react";

import Typography from "./index";

describe("Typography", () => {
  it("renders its children as text", () => {
    render(<Typography>Total Payout</Typography>);

    expect(screen.getByText("Total Payout")).toBeInTheDocument();
  });

  it("renders as a paragraph by default (body1)", () => {
    render(<Typography>Total Payout</Typography>);

    expect(screen.getByText("Total Payout").tagName).toBe("P");
  });

  it("renders as a heading element when variant is a heading", () => {
    render(<Typography variant="h1">Summary</Typography>);

    expect(screen.getByRole("heading", { level: 1, name: "Summary" })).toBeInTheDocument();
  });

  it("renders as a custom element when component is provided", () => {
    render(<Typography component="span">Reset</Typography>);

    expect(screen.getByText("Reset").tagName).toBe("SPAN");
  });

  it("passes through additional props", () => {
    render(<Typography data-testid="custom-text">Hello</Typography>);

    expect(screen.getByTestId("custom-text")).toHaveTextContent("Hello");
  });
});