import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQ } from "./faq";

describe("FAQ", () => {
  it("renders section title", () => {
    render(<FAQ />);
    expect(screen.getByText("FAQ.title")).toBeInTheDocument();
  });

  it("renders questions", () => {
    render(<FAQ />);
    expect(screen.getByText("FAQ.question1.question")).toBeInTheDocument();
  });
});
