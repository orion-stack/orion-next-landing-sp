import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Features } from "./features";

describe("Features", () => {
  it("renders section title", () => {
    render(<Features />);
    expect(screen.getByText("Features.title")).toBeInTheDocument();
  });

  it("renders feature items", () => {
    render(<Features />);
    expect(
      screen.getByText("Features.lightningFast.title"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Features.secureByDefault.title"),
    ).toBeInTheDocument();
  });
});
