import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Avatar from "./index";

describe("Avatar", () => {
  it("renders the given image with alt text when src is provided", () => {
    render(<Avatar src="/profile.png" alt="Kane Cooper" />);

    expect(screen.getByRole("img", { name: "Kane Cooper" })).toBeInTheDocument();
  });

  it("renders the given image source", () => {
    render(<Avatar src="/profile.png" alt="Kane Cooper" />);

    expect(screen.getByRole("img", { name: "Kane Cooper" })).toHaveAttribute("src", "/profile.png");
  });

  it("falls back to a default icon when no src is provided", () => {
    render(<Avatar alt="Kane Cooper" />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("does not render as a button when onClick is not provided", () => {
    render(<Avatar alt="Kane Cooper" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("does not throw when sx is provided as an object", () => {
    render(<Avatar src="/profile.png" alt="Kane Cooper" sx={{ border: "1px solid red" }} />);
    expect(screen.getByRole("img", { name: "Kane Cooper" })).toBeInTheDocument();
  });

  it("does not throw when sx is provided as an array", () => {
    render(<Avatar src="/profile.png" alt="Kane Cooper" sx={[{ border: "1px solid red" }]} />);
    expect(screen.getByRole("img", { name: "Kane Cooper" })).toBeInTheDocument();
  });

  it("renders as a button and calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Avatar alt="Kane Cooper" onClick={handleClick} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});