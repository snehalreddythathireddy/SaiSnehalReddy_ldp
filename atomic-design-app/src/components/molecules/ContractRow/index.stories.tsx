import type { Meta, StoryObj } from "@storybook/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ContractRow from "./index";
import type { Contract } from "../../../types/contract";

const contract: Contract = {
  id: 1,
  name: "Contract 1",
  type: "Monthly",
  perPayment: 12000.25,
  termLength: 12,
  availableCredit: 126983.33,
  payment: 126983.33,
  checked: false,
};

const noop = () => {};

const renderWithTable = (Story: React.ComponentType) => (
  <Table>
    <TableBody>
      <Story />
    </TableBody>
  </Table>
);

const meta: Meta<typeof ContractRow> = {
  title: "Molecules/ContractRow",
  component: ContractRow,
  decorators: [renderWithTable],
};
export default meta;

type Story = StoryObj<typeof ContractRow>;

export const Unchecked: Story = { args: { contract, checked: false, onToggle: noop } };
export const Checked: Story = { args: { contract, checked: true, onToggle: noop } };