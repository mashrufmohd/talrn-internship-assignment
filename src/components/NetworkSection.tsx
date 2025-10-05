import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import iphoneMockup from "@/assets/iphone-mockup.jpg";

const NetworkSection = () => {
  const cards = [
    {
      title: "Featured works on Talrn",
      description: "Explore the best works delivered by developers",
      variant: "primary" as const
    },
    {
      title: "See all profiles on Talrn",
      description: "Discover top developer profiles available on Talrn",
      variant: "primary" as const
    },
    {
      title: "Apply as a developer",
      description: "Start your journey as a developer with Talrn",
      variant: "primary" as const
    }
  ];

  return (
<section className="bg-dark-bg text-background py-16 px-5 mx-4 md:mx-8 lg:mx-16 xl:mx-52 rounded-lg">
  <div className="mx-auto px-4">
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold">
        Talrn is the world's largest network of top iOS talent.
      </h2>
      <p className="text-xl text-background/80">
        Save 70% on staff costs, while driving innovation & growth. Guaranteed.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`p-6 space-y-4 border-0 ${
            card.variant === "primary"
              ? "bg-primary text-primary-foreground"
              : "bg-background text-foreground"
          }`}
        >
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p
            className={
              card.variant === "primary"
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            }
          >
            {card.description}
          </p>
          <button className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
            Learn more
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </Card>
      ))}
    </div>
  </div>
</section>


  );
};

export default NetworkSection;
