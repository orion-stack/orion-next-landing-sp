import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Testimonials } from "./testimonials";

describe("Testimonials", () => {
  it("renders section title", () => {
    render(<Testimonials />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders testimonial content", () => {
    render(<Testimonials />);
    // Multiple testimonials have "content" key
    const contents = screen.getAllByText(/content/);
    expect(contents.length).toBeGreaterThan(0);
  });
});
