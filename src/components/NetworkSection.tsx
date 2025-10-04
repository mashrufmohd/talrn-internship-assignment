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
      variant: "secondary" as const
    },
    {
      title: "Apply as a developer",
      description: "Start your journey as a developer with Talrn",
      variant: "primary" as const
    }
  ];

  return (
    <section className="bg-dark-bg text-background py-16 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-30">
        <img src={iphoneMockup} alt="" className="w-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Talrn is the world's largest network of top iOS talent.
          </h2>
          <p className="text-xl text-background/80">
            Save 70% on staff costs, while driving innovation & growth. Guaranteed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
              <p className={card.variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}>
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
