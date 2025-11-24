import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./hero";

describe("Hero", () => {
  it("renders headline correctly", () => {
    render(<Hero />);
    // Check that the component renders with title content
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("getStarted")).toBeInTheDocument();
    expect(screen.getByText("viewGitHub")).toBeInTheDocument();
  });
});
