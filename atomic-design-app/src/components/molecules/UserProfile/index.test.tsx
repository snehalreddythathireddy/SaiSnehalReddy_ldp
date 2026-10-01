import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserProfile from "./index";
import { USER_PROFILE_EDIT_LABEL, USER_PROFILE_LOGOUT_LABEL } from "../../../utils/constants";

describe("UserProfile", () => {
  it("renders the trigger avatar and no popover content initially", () => {
    render(<UserProfile name="Kane Cooper" avatarSrc="/profile.png" />);

    expect(screen.getByRole("img", { name: "Kane Cooper" })).toBeInTheDocument();
    expect(screen.queryByText(USER_PROFILE_EDIT_LABEL)).not.toBeInTheDocument();
  });

  it("opens the popover and shows the user's name and menu items when the avatar is clicked", async () => {
    const user = userEvent.setup();

    render(<UserProfile name="Kane Cooper" avatarSrc="/profile.png" />);

    await user.click(screen.getByRole("img", { name: "Kane Cooper" }));

    // the name now appears twice (trigger avatar's alt + popover header text),
    // so query the popover-only text nodes to confirm it actually opened
    expect(screen.getByText("Kane Cooper")).toBeInTheDocument();
    expect(screen.getByText(USER_PROFILE_EDIT_LABEL)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Manage Subscriptions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Help" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Settings" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: USER_PROFILE_LOGOUT_LABEL })).toBeInTheDocument();
  });

  it("closes the popover on Escape", async () => {
    const user = userEvent.setup();

    render(<UserProfile name="Kane Cooper" avatarSrc="/profile.png" />);

    await user.click(screen.getByRole("img", { name: "Kane Cooper" }));
    expect(screen.getByText(USER_PROFILE_EDIT_LABEL)).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByText(USER_PROFILE_EDIT_LABEL)).not.toBeInTheDocument();
  });
});