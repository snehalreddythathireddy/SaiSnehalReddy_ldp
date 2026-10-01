import type { Meta, StoryObj } from "@storybook/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ContractRow from "./index";
import { CONTRACTS } from "../../../mocks/contracts";

const contract = CONTRACTS[0];

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