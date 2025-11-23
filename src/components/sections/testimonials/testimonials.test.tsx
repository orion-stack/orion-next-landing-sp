import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Testimonials } from "./testimonials";

describe("Testimonials", () => {
  it("renders section title", () => {
    render(<Testimonials />);
    expect(screen.getByText("Loved by developers")).toBeInTheDocument();
  });

  it("renders testimonial content", () => {
    render(<Testimonials />);
    expect(screen.getByText(/Orion saved us weeks/)).toBeInTheDocument();
  });
});
