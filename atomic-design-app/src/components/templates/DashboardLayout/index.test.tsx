import { render, screen } from "@testing-library/react";

import DashboardLayout from "./index";

describe("DashboardLayout", () => {
  it("renders the given sidebar and children", () => {
    render(
      <DashboardLayout sidebar={<div>Sidebar content</div>}>
        <div>Page content</div>
      </DashboardLayout>
    );

    expect(screen.getByText("Sidebar content")).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();
  });
});