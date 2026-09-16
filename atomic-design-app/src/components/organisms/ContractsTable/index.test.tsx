
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContractsTable from "./index";
import { CONTRACTS_TABLE_TITLE, CONTRACTS_TABLE_COLUMNS } from "../../../utils/constants";
import type { Contract } from "../../../types/contract";

const contracts: Contract[] = [
  { id: 1, name: "Contract 1", type: "Monthly", perPayment: 12000.25, termLength: 12, availableCredit: 126983.33, payment: 126983.33, checked: false },
  { id: 2, name: "Contract 2", type: "Monthly", perPayment: 6000, termLength: 12, availableCredit: 21175, payment: 21175, checked: false },
];

describe("ContractsTable", () => {
  it("renders the title and column headers", () => {
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    expect(screen.getByText(CONTRACTS_TABLE_TITLE)).toBeInTheDocument();
    CONTRACTS_TABLE_COLUMNS.forEach((column) => {
      expect(screen.getByText(column)).toBeInTheDocument();
    });
  });

  it("renders a row for every contract", () => {
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    contracts.forEach((contract) => {
      expect(screen.getByText(contract.name)).toBeInTheDocument();
    });
  });

  it("shows the header checkbox as unchecked when nothing is selected", () => {
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    const headerRow = screen.getByText(CONTRACTS_TABLE_COLUMNS[0]).closest("tr")!;
    const headerCheckbox = within(headerRow).getByRole("checkbox");
    expect(headerCheckbox).not.toBeChecked();
  });

  it("shows the header checkbox as checked when every contract is selected", () => {
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={contracts.map((c) => c.id)}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    const headerRow = screen.getByText(CONTRACTS_TABLE_COLUMNS[0]).closest("tr")!;
    const headerCheckbox = within(headerRow).getByRole("checkbox");
    expect(headerCheckbox).toBeChecked();
  });

  it("shows the header checkbox as indeterminate when only some contracts are selected", () => {
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[contracts[0].id]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    const headerRow = screen.getByText(CONTRACTS_TABLE_COLUMNS[0]).closest("tr")!;
    const headerCheckbox = within(headerRow).getByRole("checkbox");
    expect(headerCheckbox).toHaveAttribute("data-indeterminate", "true");
  });

  it("calls onToggleAll when the header checkbox is clicked", async () => {
    const user = userEvent.setup();
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    const headerRow = screen.getByText(CONTRACTS_TABLE_COLUMNS[0]).closest("tr")!;
    await user.click(within(headerRow).getByRole("checkbox"));

    expect(handleToggleAll).toHaveBeenCalledTimes(1);
  });

  it("calls onToggle with the correct contract id when a row checkbox is clicked", async () => {
    const user = userEvent.setup();
    const handleToggle = jest.fn();
    const handleToggleAll = jest.fn();

    render(
      <ContractsTable
        contracts={contracts}
        selectedIds={[]}
        onToggle={handleToggle}
        onToggleAll={handleToggleAll}
      />
    );

    const targetContract = contracts[1];
    const row = screen.getByText(targetContract.name).closest("tr")!;
    await user.click(within(row).getByRole("checkbox"));

    expect(handleToggle).toHaveBeenCalledWith(targetContract.id);
  });
});