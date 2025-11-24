"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = [
    {
      question: t("question1.question"),
      answer: t("question1.answer"),
    },
    {
      question: t("question2.question"),
      answer: t("question2.answer"),
    },
    {
      question: t("question3.question"),
      answer: t("question3.answer"),
    },
    {
      question: t("question4.question"),
      answer: t("question4.answer"),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
