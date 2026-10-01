import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummaryCard from "./index";
import {
  SUMMARY_CARD_TITLE,
  SUMMARY_CARD_PAYBACK_LABEL,
  SUMMARY_CARD_TOTAL_PAYOUT_LABEL,
  SUMMARY_CARD_REVIEW_BUTTON_LABEL,
} from "../../../utils/constants";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const baseProps = {
  term: 12,
  selectedCount: 2,
  sliderValue: 50,
  selectedSum: 1000,
  totalAvailable: 2000,
  rate: 10,
  onSliderChange: jest.fn(),
  onReset: jest.fn(),
  onReview: jest.fn(),
};

describe("SummaryCard", () => {
  it("renders the title, term, and selected contract count", () => {
    render(<SummaryCard {...baseProps} />);

    expect(screen.getByText(SUMMARY_CARD_TITLE)).toBeInTheDocument();
    expect(screen.getByText("12 months")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("computes and renders the payback amount from selectedSum and rate", () => {
    render(<SummaryCard {...baseProps} />);

    // payback = selectedSum * (1 + rate / 100) = 1000 * 1.10 = 1100
    const paybackRow = screen.getByText(SUMMARY_CARD_PAYBACK_LABEL).closest("div")!;
    expect(paybackRow).toHaveTextContent(money(1100));
  });

  it("renders the total payout as the raw selectedSum", () => {
    render(<SummaryCard {...baseProps} />);

    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;
    expect(totalRow).toHaveTextContent(money(1000));
  });

  it("disables the review button when nothing is selected", () => {
    render(<SummaryCard {...baseProps} selectedCount={0} />);

    expect(screen.getByRole("button", { name: SUMMARY_CARD_REVIEW_BUTTON_LABEL })).toBeDisabled();
  });

  it("calls onReview when the review button is clicked with contracts selected", async () => {
    const user = userEvent.setup();
    const handleReview = jest.fn();

    render(<SummaryCard {...baseProps} onReview={handleReview} />);

    await user.click(screen.getByRole("button", { name: SUMMARY_CARD_REVIEW_BUTTON_LABEL }));

    expect(handleReview).toHaveBeenCalledTimes(1);
  });
});