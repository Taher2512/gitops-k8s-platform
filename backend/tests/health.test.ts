import { describe, it, expect } from "bun:test";

describe("Backend health check", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should add numbers correctly", () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });
});
