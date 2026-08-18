import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckBox from "./index";

describe("CheckBox", () => {
  it("renders unchecked", () => {
    const handleChange = jest.fn();

    render(<CheckBox checked={false} onChange={handleChange} />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("renders checked", () => {
    const handleChange = jest.fn();

    render(<CheckBox checked={true} onChange={handleChange} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange with the new checked value when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<CheckBox checked={false} onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("calls onChange with false when an already-checked box is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<CheckBox checked={true} onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("renders as indeterminate when indeterminate is true", () => {
    const handleChange = jest.fn();

    render(<CheckBox checked={false} indeterminate onChange={handleChange} />);

    expect(screen.getByRole("checkbox")).toHaveAttribute("data-indeterminate", "true");
  });
});