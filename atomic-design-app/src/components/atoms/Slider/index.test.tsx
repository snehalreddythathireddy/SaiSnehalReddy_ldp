import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Slider from "./index";

describe("Slider", () => {
  it("renders with the given value", () => {
    const handleChange = jest.fn();

    render(<Slider value={21} onChange={handleChange} />);

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "21");
  });

  it("defaults min and max to 0 and 100", () => {
    const handleChange = jest.fn();

    render(<Slider value={21} onChange={handleChange} />);

    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "100");
  });

  it("respects custom min and max", () => {
    const handleChange = jest.fn();

    render(<Slider value={21} min={10} max={50} onChange={handleChange} />);

    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "10");
    expect(slider).toHaveAttribute("aria-valuemax", "50");
  });

  it("calls onChange with an increased value on ArrowRight", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Slider value={21} onChange={handleChange} />);

    await user.tab(); // moves focus to the slider without triggering pointer events
    await user.keyboard("{ArrowRight}");

    expect(handleChange).toHaveBeenCalledWith(22);
  });

  it("calls onChange with a decreased value on ArrowLeft", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Slider value={21} onChange={handleChange} />);

    await user.tab();
    await user.keyboard("{ArrowLeft}");

    expect(handleChange).toHaveBeenCalledWith(20);
  });
});