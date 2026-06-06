import { greet } from ".";

describe("basic test", () => {
  it("Should greet", () => {
    expect(greet("Rimon")).toBe("Hello Rimon");
  });

  it("Should not be Empty", () => {
    expect(greet("Rimon")).not.toBe("");
  });
});
