import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./index";
import { HEADER_BACK_LABEL } from "../../../utils/constants";
import type { User } from "../../../types/user";

const user: User = {
  id: 1,
  name: "Kane Cooper",
  role: "Admin",
  avatarSrc: "/profile.png",
};

describe("Header", () => {
  it("renders the given title and subtitle", () => {
    const handleBack = jest.fn();

    render(
      <Header title="New cash kick" subtitle="Let's get started" onBack={handleBack} user={user} />
    );

    expect(screen.getByText("New cash kick")).toBeInTheDocument();
    expect(screen.getByText("Let's get started")).toBeInTheDocument();
  });

  it("calls onBack when the back link is clicked", async () => {
    const userEventInstance = userEvent.setup();
    const handleBack = jest.fn();

    render(
      <Header title="New cash kick" subtitle="Let's get started" onBack={handleBack} user={user} />
    );

    await userEventInstance.click(screen.getByText(HEADER_BACK_LABEL));

    expect(handleBack).toHaveBeenCalledTimes(1);
  });

  it("renders the user's profile trigger with their name", () => {
    const handleBack = jest.fn();

    render(
      <Header title="New cash kick" subtitle="Let's get started" onBack={handleBack} user={user} />
    );

    expect(screen.getByRole("img", { name: user.name })).toBeInTheDocument();
  });
});