import { render, screen } from "@testing-library/react";

import Divider from "./index";

describe("Divider", () => {
  it("renders as a separator", () => {
    render(<Divider />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
  it("does not throw when sx is provided as an object", () => {
    render(<Divider sx={{ borderColor: "red" }} />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("does not throw when sx is provided as an array", () => {
    render(<Divider sx={[{ borderColor: "red" }]} />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders with a custom spacing without crashing", () => {
    render(<Divider spacing={4} />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});