"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Zap, Shield, Smartphone, Globe, Code, Layers } from "lucide-react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      name: t("lightningFast.title"),
      description: t("lightningFast.description"),
      icon: Zap,
    },
    {
      name: t("secureByDefault.title"),
      description: t("secureByDefault.description"),
      icon: Shield,
    },
    {
      name: t("responsiveDesign.title"),
      description: t("responsiveDesign.description"),
      icon: Smartphone,
    },
    {
      name: t("globalScale.title"),
      description: t("globalScale.description"),
      icon: Globe,
    },
    {
      name: t("developerExperience.title"),
      description: t("developerExperience.description"),
      icon: Code,
    },
    {
      name: t("modularArchitecture.title"),
      description: t("modularArchitecture.description"),
      icon: Layers,
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="flex flex-col items-start"
              variants={item}
            >
              <div className="rounded-lg bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7">
                {feature.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
