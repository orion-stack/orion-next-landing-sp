import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Features } from "./features";

describe("Features", () => {
  it("renders section title", () => {
    render(<Features />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders feature items", () => {
    render(<Features />);
    // Check for multiple "title" occurrences (one per feature)
    const titles = screen.getAllByText("title");
    expect(titles.length).toBeGreaterThan(0);
  });
});
