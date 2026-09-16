import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import type { ReactElement } from "react";

import ContractRow from "./index";
import { money } from "../../../utils/format";
import { CONTRACT_ROW_TERM_UNIT } from "../../../utils/constants";
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

const renderRow = (ui: ReactElement) =>
  render(
    <Table>
      <TableBody>{ui}</TableBody>
    </Table>
  );

describe("ContractRow", () => {
  it("renders the contract's name, type, and formatted amounts", () => {
    const handleToggle = jest.fn();

    renderRow(<ContractRow contract={contract} checked={false} onToggle={handleToggle} />);

    expect(screen.getByText(contract.name)).toBeInTheDocument();
    expect(screen.getByText(contract.type)).toBeInTheDocument();
    expect(screen.getAllByText(money(contract.perPayment)).length).toBeGreaterThan(0);
    expect(screen.getByText(`${contract.termLength} ${CONTRACT_ROW_TERM_UNIT}`)).toBeInTheDocument();
  });

  it("reflects the checked prop on the checkbox", () => {
    const handleToggle = jest.fn();

    renderRow(<ContractRow contract={contract} checked={true} onToggle={handleToggle} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onToggle with the contract's id when the checkbox is clicked", async () => {
    const user = userEvent.setup();
    const handleToggle = jest.fn();

    renderRow(<ContractRow contract={contract} checked={false} onToggle={handleToggle} />);

    await user.click(screen.getByRole("checkbox"));

    expect(handleToggle).toHaveBeenCalledWith(contract.id);
  });
});