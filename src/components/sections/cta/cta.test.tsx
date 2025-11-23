import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CTA } from "./cta";

describe("CTA", () => {
  it("renders headline correctly", () => {
    render(<CTA />);
    expect(
      screen.getByText(/Ready to start your next project/),
    ).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<CTA />);
    expect(screen.getByText("Get started today")).toBeInTheDocument();
  });
});
