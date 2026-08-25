import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SummaryCard from "./index";

const meta: Meta<typeof SummaryCard> = {
  title: "Organisms/SummaryCard",
  component: SummaryCard,
};
export default meta;

type Story = StoryObj<typeof SummaryCard>;

export const Empty: Story = {
  args: {
    term: 12,
    selectedCount: 0,
    sliderValue: 0,
    selectedSum: 0,
    totalAvailable: 401458.33,
    rate: 12,
    onSliderChange: () => {},
    onReset: () => {},
    onReview: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const total = 401458.33;
    const [value, setValue] = useState(47);
    const selectedSum = (value / 100) * total;
    return (
      <SummaryCard
        term={12}
        selectedCount={value > 0 ? 2 : 0}
        sliderValue={value}
        selectedSum={selectedSum}
        totalAvailable={total}
        rate={12}
        onSliderChange={setValue}
        onReset={() => setValue(0)}
        onReview={() => alert(`Reviewing ${selectedSum}`)}
      />
    );
  },
};
