"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { AnimatedRocket } from "@/components/custom/animated-rocket";
import { motion } from "motion/react";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" asChild>
            <Link href="#features">{t("getStarted")}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/orion-stack" target="_blank">
              {t("viewGitHub")}
            </Link>
          </Button>
        </motion.div>

        <div className="mt-12">
          <AnimatedRocket />
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
    </section>
  );
}
