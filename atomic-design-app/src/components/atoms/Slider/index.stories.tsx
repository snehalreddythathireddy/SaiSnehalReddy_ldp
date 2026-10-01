import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./index";

const meta: Meta<typeof Slider> = {
  title: "Atoms/Slider",
  component: Slider,
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const AtZero: Story = { args: { value: 0, onChange: () => {} } };
export const AtHalf: Story = { args: { value: 50, onChange: () => {} } };
export const AtFull: Story = { args: { value: 100, onChange: () => {} } };

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(21);
    return <Slider value={value} onChange={setValue} />;
  },
};
