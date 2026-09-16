import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummarySlider from "./index";
import { SUMMARY_SLIDER_LABEL, SUMMARY_SLIDER_RESET_LABEL } from "../../../utils/constants";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

describe("SummarySlider", () => {
  it("renders the label and formatted selected/total amounts", () => {
    const handleChange = jest.fn();
    const handleReset = jest.fn();

    render(
      <SummarySlider value={50} selected={100} total={200} onChange={handleChange} onReset={handleReset} />
    );

    expect(screen.getByText(SUMMARY_SLIDER_LABEL)).toBeInTheDocument();
    expect(screen.getByText(`${money(100)} selected of ${money(200)}`)).toBeInTheDocument();
  });

  it("disables the reset button when nothing is selected", () => {
    const handleChange = jest.fn();
    const handleReset = jest.fn();

    render(
      <SummarySlider value={0} selected={0} total={200} onChange={handleChange} onReset={handleReset} />
    );

    expect(screen.getByRole("button", { name: SUMMARY_SLIDER_RESET_LABEL })).toBeDisabled();
  });

  it("calls onReset when the reset button is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    const handleReset = jest.fn();

    render(
      <SummarySlider value={50} selected={100} total={200} onChange={handleChange} onReset={handleReset} />
    );

    await user.click(screen.getByRole("button", { name: SUMMARY_SLIDER_RESET_LABEL }));

    expect(handleReset).toHaveBeenCalledTimes(1);
  });

  it("calls onChange when the slider value changes via keyboard", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    const handleReset = jest.fn();

    render(
      <SummarySlider value={50} selected={100} total={200} onChange={handleChange} onReset={handleReset} />
    );

    await user.tab(); // focuses the Reset button first
    await user.tab(); // then the slider
    await user.keyboard("{ArrowRight}");

    expect(handleChange).toHaveBeenCalledWith(51);
  });
});