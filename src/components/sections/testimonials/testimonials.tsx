"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import Image from "next/image";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      content: t("testimonial1.content"),
      author: {
        name: t("testimonial1.author"),
        role: t("testimonial1.role"),
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      content: t("testimonial2.content"),
      author: {
        name: t("testimonial2.author"),
        role: t("testimonial2.role"),
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      content: t("testimonial3.content"),
      author: {
        name: t("testimonial3.author"),
        role: t("testimonial3.role"),
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-muted/50 p-8 shadow-sm ring-1 ring-muted"
            >
              <blockquote className="text-base leading-7">
                <p>&quot;{testimonial.content}&quot;</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <Image
                  className="h-10 w-10 rounded-full bg-muted"
                  src={testimonial.author.imageUrl}
                  alt=""
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
