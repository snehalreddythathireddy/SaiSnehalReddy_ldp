import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AsyncMessage from "./AsyncMessage";

describe("AsyncMessage component", () => {
  it("shows the message after loading", async () => {
    render(<AsyncMessage />);

    expect(screen.queryByText("Data loaded")).not.toBeInTheDocument();

    expect(
      await screen.findByText("Data loaded")
    ).toBeInTheDocument();
  });
});