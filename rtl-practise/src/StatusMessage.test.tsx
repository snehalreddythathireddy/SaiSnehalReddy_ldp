import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatusMessage from "./StatusMessage";

describe("StatusMessage component", () => {
  it("renders the status message", () => {
    render(<StatusMessage message="Loading..." />);

    expect(
      screen.getByTestId("status-message")
    ).toBeInTheDocument();
  });
});