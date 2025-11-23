import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./hero";

describe("Hero", () => {
  it("renders headline correctly", () => {
    render(<Hero />);
    expect(screen.getByText(/Hero.title/)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Hero.getStarted")).toBeInTheDocument();
    expect(screen.getByText("Hero.viewGitHub")).toBeInTheDocument();
  });
});
