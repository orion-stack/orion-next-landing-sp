import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock IntersectionObserver
const IntersectionObserverMock = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
};
vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

// Mock ResizeObserver
const ResizeObserverMock = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
};
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

// Mock framer-motion
vi.mock("motion/react", async () => {
  const actual = await vi.importActual("motion/react");
  return {
    ...actual,
    motion: {
      div: ({
        children,
        ...props
      }: React.PropsWithChildren<Record<string, unknown>>) => {
        const {
          whileInView,
          initial,
          animate,
          transition,
          viewport,
          ...validProps
        } = props as Record<string, unknown>;
        void whileInView;
        void initial;
        void animate;
        void transition;
        void viewport;
        return <div {...validProps}>{children}</div>;
      },
      section: ({
        children,
        ...props
      }: React.PropsWithChildren<Record<string, unknown>>) => {
        const {
          whileInView,
          initial,
          animate,
          transition,
          viewport,
          ...validProps
        } = props as Record<string, unknown>;
        void whileInView;
        void initial;
        void animate;
        void transition;
        void viewport;
        return <section {...validProps}>{children}</section>;
      },
      // Add other elements as needed
    },
  };
});

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    // Return the last part of the key for better readability in tests
    // e.g., "Hero.title" -> "title", "Features.lightningFast.title" -> "title"
    const parts = key.split(".");
    return parts[parts.length - 1];
  },
  useLocale: () => "en",
}));

afterEach(() => {
  cleanup();
});
