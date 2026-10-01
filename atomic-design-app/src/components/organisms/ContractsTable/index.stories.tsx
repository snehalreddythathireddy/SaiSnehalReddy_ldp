import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ContractsTable from "./index";
import { CONTRACTS } from "../../../mocks/contracts";

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