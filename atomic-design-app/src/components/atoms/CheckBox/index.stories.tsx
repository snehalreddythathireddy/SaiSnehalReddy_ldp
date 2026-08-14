import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./index";

const meta: Meta<typeof CheckBox> = {
  title: "Atoms/CheckBox",
  component: CheckBox,
};
export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Unchecked: Story = { args: { checked: false, onChange: () => {} } };
export const Checked: Story = { args: { checked: true, onChange: () => {} } };
export const Indeterminate: Story = { args: { checked: false, indeterminate: true, onChange: () => {} } };

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <CheckBox checked={checked} onChange={setChecked} />;
  },
};
