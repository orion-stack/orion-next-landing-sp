import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Orion Stack?",
    answer:
      "Orion Stack is a collection of high-quality, opinionated Next.js templates designed to help developers ship faster. It includes pre-configured tools for styling, testing, linting, and more.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, the starter templates are open source and free to use for both personal and commercial projects.",
  },
  {
    question: "Can I use my own backend?",
    answer:
      "Absolutely. Orion is backend-agnostic. You can connect it to any API, database, or headless CMS you prefer.",
  },
  {
    question: "How do I deploy?",
    answer:
      "Orion is optimized for Vercel, but can be deployed to any platform that supports Next.js, including Netlify, AWS Amplify, or a custom Docker container.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a different question and can&apos;t find the answer you&apos;re
            looking for? Reach out to our support team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
