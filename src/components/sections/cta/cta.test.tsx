import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CTA } from "./cta";

describe("CTA", () => {
  it("renders headline correctly", () => {
    render(<CTA />);
    // Check that the component renders with heading content
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<CTA />);
    expect(screen.getByText("getStarted")).toBeInTheDocument();
  });
});
