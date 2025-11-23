import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders copyright notice", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Orion Stack. All rights reserved./),
    ).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();
  });
});
