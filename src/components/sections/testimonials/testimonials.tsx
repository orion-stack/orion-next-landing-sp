import { Container } from "@/components/layout/container";
import Image from "next/image";

const testimonials = [
  {
    body: "Orion saved us weeks of development time. The code quality is outstanding and the structure is intuitive.",
    author: {
      name: "Sarah Chen",
      handle: "sarahchen",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The best Next.js starter I've used. It strikes the perfect balance between opinionated and flexible.",
    author: {
      name: "Alex Rivera",
      handle: "arivera",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "I was able to launch my SaaS in a weekend thanks to Orion. Highly recommended for any solo founder.",
    author: {
      name: "David Kim",
      handle: "davidkim",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what others are building with Orion.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.handle}
              className="flex flex-col justify-between rounded-2xl bg-muted/30 p-8 ring-1 ring-muted"
            >
              <blockquote className="text-lg leading-8 text-muted-foreground">
                <p>&quot;{testimonial.body}&quot;</p>
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
                  <div className="text-sm leading-6 text-muted-foreground">
                    @{testimonial.author.handle}
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
