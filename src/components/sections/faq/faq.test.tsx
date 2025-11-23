import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQ } from "./faq";

describe("FAQ", () => {
  it("renders section title", () => {
    render(<FAQ />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders questions", () => {
    render(<FAQ />);
    // Multiple questions have "question" key
    const questions = screen.getAllByText("question");
    expect(questions.length).toBeGreaterThan(0);
  });
});
