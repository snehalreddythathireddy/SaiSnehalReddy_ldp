import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ContractsTable from "./index";
import type { Contract } from "../../../types/contract";

const CONTRACTS: Contract[] = [
  { id: 1, name: "Contract 1", type: "Monthly", perPayment: 12000.25, termLength: 12, availableCredit: 126983.33, payment: 126983.33, checked: false },
  { id: 2, name: "Contract 2", type: "Monthly", perPayment: 6000, termLength: 12, availableCredit: 21175, payment: 21175, checked: false },
  { id: 3, name: "Contract 3", type: "Monthly", perPayment: 6000, termLength: 12, availableCredit: 63325, payment: 63325, checked: false },
];

const meta: Meta<typeof ContractsTable> = {
  title: "Organisms/ContractsTable",
  component: ContractsTable,
};
export default meta;

type Story = StoryObj<typeof ContractsTable>;

const InteractiveContractsTable = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([1]);

  const handleToggle = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleToggleAll = () => {
    setSelectedIds((prev) => (prev.length === CONTRACTS.length ? [] : CONTRACTS.map((c) => c.id)));
  };

  return (
    <ContractsTable
      contracts={CONTRACTS}
      selectedIds={selectedIds}
      onToggle={handleToggle}
      onToggleAll={handleToggleAll}
    />
  );
};

export const Interactive: Story = {
  render: InteractiveContractsTable,
};