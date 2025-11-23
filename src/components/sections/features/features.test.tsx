import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Features } from "./features";

describe("Features", () => {
  it("renders section title", () => {
    render(<Features />);
    expect(screen.getByText("Everything you need to ship")).toBeInTheDocument();
  });

  it("renders feature items", () => {
    render(<Features />);
    expect(screen.getByText("Lightning Fast")).toBeInTheDocument();
    expect(screen.getByText("Secure by Default")).toBeInTheDocument();
  });
});
