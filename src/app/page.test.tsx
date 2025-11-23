import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Page from "./page";
import messages from "../../messages/en.json";

// Mock getTranslations from next-intl/server
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace: keyof typeof messages) => {
    return (key: string) => {
      // Basic key lookup for testing purposes
      const namespaceMessages = messages[namespace];
      if (namespaceMessages && key in namespaceMessages) {
        return namespaceMessages[key as keyof typeof namespaceMessages];
      }
      return key;
    };
  },
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

test("Home Page", async () => {
  // Page is an async server component, so we need to await it
  const PageComponent = await Page();
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {PageComponent}
    </NextIntlClientProvider>,
  );

  // Test for the main heading
  expect(
    screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "h1" &&
        content.includes("Build faster with")
      );
    }),
  ).toBeInTheDocument();

  // Test for some key content
  expect(screen.getByText("Everything you need to ship")).toBeInTheDocument();
  expect(screen.getByText("Loved by developers")).toBeInTheDocument();
  expect(
    screen.getByText(/Ready to start your next project/),
  ).toBeInTheDocument();
});
