import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "./header";

describe("Header", () => {
  it("renders logo correctly", () => {
    render(<Header />);
    expect(screen.getByText("Orion")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("features")).toBeInTheDocument();
    expect(screen.getByText("testimonials")).toBeInTheDocument();
    expect(screen.getByText("faq")).toBeInTheDocument();
  });
});
