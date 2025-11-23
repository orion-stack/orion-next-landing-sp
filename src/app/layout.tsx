import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/providers";
import { getMessages, getLocale, getTimeZone } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orion Stack - Next.js Starter Templates",
    template: "%s | Orion Stack",
  },
  description:
    "Production-ready Next.js starter templates with TypeScript, Tailwind CSS, Shadcn UI, and comprehensive developer tooling. Build faster with Orion.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Starter Template",
    "Boilerplate",
    "Shadcn UI",
    "Framer Motion",
    "next-intl",
  ],
  authors: [{ name: "Orion Stack" }],
  creator: "Orion Stack",
  openGraph: {
    title: "Orion Stack - Next.js Starter Templates",
    description:
      "Production-ready Next.js starter templates with TypeScript, Tailwind CSS, and comprehensive tooling. Everything you need, nothing you don't.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    siteName: "Orion Stack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Stack - Next.js Starter Templates",
    description:
      "Build faster with production-ready Next.js templates. TypeScript, Tailwind CSS, and modern tooling included.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

/**
 * The root layout for the application.
 * It sets up the HTML structure, fonts, and providers.
 *
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to render within the layout.
 * @returns {Promise<React.ReactElement>} The rendered root layout.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const locale = await getLocale();
  const timeZone = await getTimeZone();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers messages={messages} locale={locale} timeZone={timeZone}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
