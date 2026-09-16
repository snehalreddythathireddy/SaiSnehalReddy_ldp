import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar from "./index";
import {
  SIDEBAR_LOGO_ALT,
  SIDEBAR_HOME_LABEL,
  SIDEBAR_CASH_LABEL,
  SIDEBAR_WATCH_HOW_TO_LABEL,
} from "../../../utils/constants";

describe("Sidebar", () => {
  it("renders the logo and both nav items", () => {
    const handleNavigate = jest.fn();

    render(<Sidebar active="home" onNavigate={handleNavigate} />);

    expect(screen.getByText(SIDEBAR_LOGO_ALT)).toBeInTheDocument();
    expect(screen.getByText(SIDEBAR_HOME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(SIDEBAR_CASH_LABEL)).toBeInTheDocument();
  });

  it("calls onNavigate with 'home' when the Home item is clicked", async () => {
    const user = userEvent.setup();
    const handleNavigate = jest.fn();

    render(<Sidebar active="cash" onNavigate={handleNavigate} />);

    await user.click(screen.getByText(SIDEBAR_HOME_LABEL));

    expect(handleNavigate).toHaveBeenCalledWith("home");
  });

  it("calls onNavigate with 'cash' when the Cash Acceleration item is clicked", async () => {
    const user = userEvent.setup();
    const handleNavigate = jest.fn();

    render(<Sidebar active="home" onNavigate={handleNavigate} />);

    await user.click(screen.getByText(SIDEBAR_CASH_LABEL));

    expect(handleNavigate).toHaveBeenCalledWith("cash");
  });

  it("renders the watch-how-to link as a button and calls onWatchHowTo when provided", async () => {
    const user = userEvent.setup();
    const handleNavigate = jest.fn();
    const handleWatchHowTo = jest.fn();

    render(<Sidebar active="home" onNavigate={handleNavigate} onWatchHowTo={handleWatchHowTo} />);

    await user.click(screen.getByRole("button", { name: SIDEBAR_WATCH_HOW_TO_LABEL }));

    expect(handleWatchHowTo).toHaveBeenCalledTimes(1);
  });

  it("renders the watch-how-to text without a button role when onWatchHowTo is not provided", () => {
    const handleNavigate = jest.fn();

    render(<Sidebar active="home" onNavigate={handleNavigate} />);

    expect(screen.getByText(SIDEBAR_WATCH_HOW_TO_LABEL)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: SIDEBAR_WATCH_HOW_TO_LABEL })).not.toBeInTheDocument();
  });
});