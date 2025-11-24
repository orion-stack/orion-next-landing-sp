export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Orion Stack",
    applicationCategory: "DeveloperApplication",
    description:
      "Production-ready Next.js starter templates with TypeScript, Tailwind CSS, and comprehensive developer tooling.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Any",
    softwareVersion: "1.0.0",
    author: {
      "@type": "Organization",
      name: "Orion Stack",
    },
  };
}
