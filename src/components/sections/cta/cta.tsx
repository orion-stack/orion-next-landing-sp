"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { motion } from "motion/react";

export function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-primary px-6 py-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <motion.div
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              {t("title")}
              <br />
              {t("subtitle")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              {t("description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">{t("getStarted")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-primary-foreground/20"
                asChild
              >
                <Link href="#">
                  {t("learnMore")} <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
