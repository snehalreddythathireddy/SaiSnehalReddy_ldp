import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewCashKickPage from "./index";
import { getContracts } from "../../../api/contracts";
import { getCurrentUser } from "../../../api/user";
import {
  SUMMARY_CARD_REVIEW_BUTTON_LABEL,
  SUMMARY_CARD_TOTAL_PAYOUT_LABEL,
  NEW_CASH_KICK_PAGE_LOADING_LABEL,
  NEW_CASH_KICK_PAGE_ERROR_LABEL,
} from "../../../utils/constants";
import type { Contract } from "../../../types/contract";
import type { User } from "../../../types/user";

jest.mock("../../../api/contracts");
jest.mock("../../../api/user");

const mockGetContracts = getContracts as jest.MockedFunction<typeof getContracts>;
const mockGetCurrentUser = getCurrentUser as jest.MockedFunction<typeof getCurrentUser>;

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const CONTRACTS: Contract[] = [
  { id: 1, name: "Contract 1", type: "Monthly", perPayment: 12000.25, termLength: 12, availableCredit: 126983.33, payment: 126983.33, checked: false },
  { id: 2, name: "Contract 2", type: "Monthly", perPayment: 6000, termLength: 12, availableCredit: 21175, payment: 21175, checked: false },
  { id: 3, name: "Contract 3", type: "Monthly", perPayment: 6000, termLength: 12, availableCredit: 63325, payment: 63325, checked: false },
];

const USER: User = {
  id: 1,
  name: "Kane Cooper",
  role: "Admin",
  avatarSrc: "/profile.png",
};

beforeEach(() => {
  mockGetContracts.mockResolvedValue(CONTRACTS);
  mockGetCurrentUser.mockResolvedValue(USER);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("NewCashKickPage", () => {
  it("shows a loading state before the fetch resolves", () => {
    render(<NewCashKickPage />);

    expect(screen.getByText(NEW_CASH_KICK_PAGE_LOADING_LABEL)).toBeInTheDocument();
  });

  it("shows an error state when the fetch fails", async () => {
    mockGetContracts.mockRejectedValue(new Error("network error"));

    render(<NewCashKickPage />);

    expect(await screen.findByText(NEW_CASH_KICK_PAGE_ERROR_LABEL)).toBeInTheDocument();
  });

  it("renders every fetched contract once loaded", async () => {
    render(<NewCashKickPage />);

    for (const contract of CONTRACTS) {
      expect(await screen.findByText(contract.name)).toBeInTheDocument();
    }
  });

  it("starts with nothing selected and the review button disabled", async () => {
    render(<NewCashKickPage />);

    const reviewButton = await screen.findByRole("button", { name: SUMMARY_CARD_REVIEW_BUTTON_LABEL });
    expect(reviewButton).toBeDisabled();

    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;
    expect(totalRow).toHaveTextContent(money(0));
  });

  it("selects a contract and updates the total payout when its checkbox is clicked", async () => {
    const user = userEvent.setup();

    render(<NewCashKickPage />);

    const row = (await screen.findByText(CONTRACTS[0].name)).closest("tr")!;
    const checkbox = row.querySelector('input[type="checkbox"]')!;
    await user.click(checkbox);

    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;
    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(CONTRACTS[0].availableCredit));
    });
  });

  it("selects and then deselects a contract", async () => {
    const user = userEvent.setup();

    render(<NewCashKickPage />);

    const row = (await screen.findByText(CONTRACTS[0].name)).closest("tr")!;
    const checkbox = row.querySelector('input[type="checkbox"]')!;
    await user.click(checkbox);
    await user.click(checkbox);

    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;
    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(0));
    });
  });

  it("selects and deselects every contract via the header checkbox", async () => {
    const user = userEvent.setup();

    render(<NewCashKickPage />);

    await screen.findByText(CONTRACTS[0].name);
    const headerCheckbox = screen.getAllByRole("checkbox")[0];

    const totalAvailable = CONTRACTS.reduce((sum, c) => sum + c.availableCredit, 0);
    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;

    await user.click(headerCheckbox);
    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(totalAvailable));
    });

    await user.click(headerCheckbox);
    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(0));
    });
  });

  it("clears the selection when reset is clicked", async () => {
    const user = userEvent.setup();

    render(<NewCashKickPage />);

    const row = (await screen.findByText(CONTRACTS[0].name)).closest("tr")!;
    const checkbox = row.querySelector('input[type="checkbox"]')!;
    await user.click(checkbox);

    await user.click(screen.getByRole("button", { name: "Reset" }));

    const reviewButton = screen.getByRole("button", { name: SUMMARY_CARD_REVIEW_BUTTON_LABEL });
    expect(reviewButton).toBeDisabled();
  });

  it("alerts with the formatted selected sum when the review button is clicked", async () => {
    const user = userEvent.setup();
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<NewCashKickPage />);

    const row = (await screen.findByText(CONTRACTS[0].name)).closest("tr")!;
    const checkbox = row.querySelector('input[type="checkbox"]')!;
    await user.click(checkbox);

    const reviewButton = await screen.findByRole("button", { name: SUMMARY_CARD_REVIEW_BUTTON_LABEL });
    await waitFor(() => expect(reviewButton).not.toBeDisabled());
    await user.click(reviewButton);

    expect(alertSpy).toHaveBeenCalledWith(`Reviewing credit for ${CONTRACTS[0].availableCredit.toFixed(2)}`);

    alertSpy.mockRestore();
  });

  it("opens a new window when 'Watch how to' is clicked", async () => {
    const user = userEvent.setup();
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<NewCashKickPage />);

    await user.click(screen.getByText("Watch how to"));

    expect(openSpy).toHaveBeenCalledWith("#", "_blank");

    openSpy.mockRestore();
  });

  it("selects contracts up to the target when the slider is moved", async () => {
    render(<NewCashKickPage />);

    await screen.findByText(CONTRACTS[0].name);
    const slider = screen.getByRole("slider");

    fireEvent.change(slider, { target: { value: "100" } });

    const totalAvailable = CONTRACTS.reduce((sum, c) => sum + c.availableCredit, 0);
    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;

    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(totalAvailable));
    });
  });

  it("selects a partial set of contracts when the slider is moved to a lower value", async () => {
    render(<NewCashKickPage />);

    await screen.findByText(CONTRACTS[0].name);
    const slider = screen.getByRole("slider");

    fireEvent.change(slider, { target: { value: "1" } });

    const totalRow = screen.getByText(SUMMARY_CARD_TOTAL_PAYOUT_LABEL).closest("div")!;

    await waitFor(() => {
      expect(totalRow).toHaveTextContent(money(CONTRACTS[0].availableCredit));
    });
  });

  it("does not update state after unmounting before the fetch resolves", async () => {
    let resolveContracts: (value: Contract[]) => void;
    mockGetContracts.mockReturnValue(
      new Promise((resolve) => {
        resolveContracts = resolve;
      })
    );

    const { unmount } = render(<NewCashKickPage />);
    unmount();

    resolveContracts!(CONTRACTS);

    await waitFor(() => {
      expect(mockGetContracts).toHaveBeenCalled();
    });
  });

  it("does not set an error after unmounting before a failed fetch rejects", async () => {
    let rejectContracts: (reason: Error) => void;
    mockGetContracts.mockReturnValue(
      new Promise((_, reject) => {
        rejectContracts = reject;
      })
    );

    const { unmount } = render(<NewCashKickPage />);
    unmount();

    rejectContracts!(new Error("network error"));

    await waitFor(() => {
      expect(mockGetContracts).toHaveBeenCalled();
    });
  });

  it("calls the back handler when the header back button is clicked", async () => {
    const user = userEvent.setup();
    render(<NewCashKickPage />);

    await screen.findByText(CONTRACTS[0].name);

    const backLabel = screen.getByText("Back");
    await user.click(backLabel);
  });
});