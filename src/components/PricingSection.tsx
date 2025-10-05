import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import managedBg from "@/assets/managed-services-bg.jpg";

const PricingSection = () => {
  const plans = [
    {
      name: "Premium Plan",
      price: "$160",
      period: "/mo",
      cta: "Know More"
    },
    {
      name: "Standard Plan",
      price: "$0",
      period: "/mo",
      cta: "Know More"
    },
    {
      name: "Customized Plan",
      price: "Get in touch with our team",
      cta: "Contact Us"
    }
  ];

  return (
   <section className="relative py-16 overflow-hidden mx-4 md:mx-8 lg:mx-16 xl:mx-52 mt-10 mb-10 rounded-lg">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${managedBg})`
    }}
  />

  <div className="container mx-auto px-4 relative z-10 ">
    <div className="max-w-3xl mb-12 text-background">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Experience Talrn's managed services.
      </h2>
      <p className="text-xl text-background/90">
        Full-scale resource augmentation with a dedicated success manager to manage your team's performance. Book a free call with our team.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className="bg-primary text-primary-foreground p-8 space-y-6 border-0"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            {plan.period ? (
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg opacity-80">{plan.period}</span>
              </div>
            ) : (
              <p className="text-lg">{plan.price}</p>
            )}
          </div>
          <Button variant="secondary" size="lg" className="w-full">
            {plan.cta}
          </Button>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
};

export default PricingSection;
