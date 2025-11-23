import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CTA } from "./cta";

describe("CTA", () => {
  it("renders headline correctly", () => {
    render(<CTA />);
    expect(screen.getByText(/CTA.title/)).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<CTA />);
    expect(screen.getByText("CTA.getStarted")).toBeInTheDocument();
  });
});
