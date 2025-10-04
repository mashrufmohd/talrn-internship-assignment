import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CTASection = () => {
  const features = ["Independent", "Secure", "Transparent"];

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start your outsourcing journey today
            </h2>
            <div className="flex flex-wrap gap-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <Button size="lg" variant="secondary" className="px-12">
            View Profiles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
