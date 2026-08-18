import { render, screen } from "@testing-library/react";

import Icon from "./index";

describe("Icon", () => {
  it("renders the given image source", () => {
    const { container } = render(<Icon src="/arrow-left.svg" alt="Back" />);

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src", "/arrow-left.svg");
  });

  it("renders with the given alt text as an accessible image", () => {
    render(<Icon src="/arrow-left.svg" alt="Back" />);

    expect(screen.getByRole("img", { name: "Back" })).toBeInTheDocument();
  });
  it("does not throw when sx is provided as an object", () => {
    render(<Icon src="/arrow-left.svg" alt="Back" sx={{ opacity: 0.5 }} />);
    expect(screen.getByRole("img", { name: "Back" })).toBeInTheDocument();
  });

  it("does not throw when sx is provided as an array", () => {
    render(<Icon src="/arrow-left.svg" alt="Back" sx={[{ opacity: 0.5 }]} />);
    expect(screen.getByRole("img", { name: "Back" })).toBeInTheDocument();
  });

  it("defaults to an empty alt, treated as decorative", () => {
    const { container } = render(<Icon src="/arrow-left.svg" />);

    // Empty alt removes the image from the accessibility tree, so it
    // won't be found via role — check the attribute directly instead.
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("alt", "");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});