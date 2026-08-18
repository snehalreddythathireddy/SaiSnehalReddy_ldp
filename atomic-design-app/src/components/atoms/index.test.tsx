import * as Atoms from "./index";

describe("atoms barrel", () => {
  it("re-exports every atom as a defined component", () => {
    expect(Atoms.Avatar).toBeDefined();
    expect(Atoms.Button).toBeDefined();
    expect(Atoms.Checkbox).toBeDefined();
    expect(Atoms.Divider).toBeDefined();
    expect(Atoms.Icon).toBeDefined();
    expect(Atoms.Slider).toBeDefined();
    expect(Atoms.Typography).toBeDefined();
  });
});