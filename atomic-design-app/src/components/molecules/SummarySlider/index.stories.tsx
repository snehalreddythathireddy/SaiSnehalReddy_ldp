import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SummarySlider from "./index";

const meta: Meta<typeof SummarySlider> = {
  title: "Molecules/SummarySlider",
  component: SummarySlider,
};
export default meta;

type Story = StoryObj<typeof SummarySlider>;

export const Empty: Story = {
  args: { value: 0, selected: 0, total: 401458.33, onChange: () => {}, onReset: () => {} },
};

export const Interactive: Story = {
  render: () => {
    const total = 401458.33;
    const [value, setValue] = useState(21);
    return (
      <SummarySlider
        value={value}
        selected={(value / 100) * total}
        total={total}
        onChange={setValue}
        onReset={() => setValue(0)}
      />
    );
  },
};
