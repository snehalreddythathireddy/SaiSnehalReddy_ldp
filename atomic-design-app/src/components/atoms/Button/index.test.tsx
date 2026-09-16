import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./index";

describe("Button", () => {
  it("renders its children as the accessible name", () => {
    render(<Button>Review Your Credit</Button>);

    expect(screen.getByRole("button", { name: "Review Your Credit" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Reset</Button>);

    await user.click(screen.getByRole("button", { name: "Reset" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as disabled and does not attach a working click handler", () => {
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick} disabled>
        Reset
      </Button>
    );

    const button = screen.getByRole("button", { name: "Reset" });
    expect(button).toBeDisabled();
  });

  it("renders the startIcon alongside its children", () => {
    render(<Button startIcon={<span data-testid="icon" />}>Export</Button>);

    const button = screen.getByRole("button", { name: "Export" });
    expect(button).toContainElement(screen.getByTestId("icon"));
  });
});