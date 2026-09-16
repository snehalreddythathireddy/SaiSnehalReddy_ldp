import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IconText from "./index";

describe("IconText", () => {
  it("renders the given label", () => {
    render(<IconText icon="/home-2.svg" label="Home" />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<IconText icon="/home-2.svg" label="Home" onClick={handleClick} />);

    await user.click(screen.getByText("Home"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not throw when no onClick is provided and it's clicked", async () => {
    const user = userEvent.setup();

    render(<IconText icon="/home-2.svg" label="Home" />);

    await user.click(screen.getByText("Home"));

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});