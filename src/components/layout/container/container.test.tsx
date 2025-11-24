import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./container";

describe("Container", () => {
  it("renders children correctly", () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom classes", () => {
    render(<Container className="custom-class">Test Content</Container>);
    const container = screen.getByText("Test Content");
    expect(container).toHaveClass("custom-class");
  });
});
