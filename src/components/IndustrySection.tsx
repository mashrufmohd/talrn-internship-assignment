import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import test1 from "@/assets/test-1.png";

const industries = [
  "Healthcare",
  "Automotive",
  "Banking",
  "Capital Markets",
  "Travel",
  "Digital Commerce"
];

const IndustrySection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Capital Markets");

  return (
    <section className="bg-background py-16 mx-48">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Scale your team with Talrn's immediately available resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Find pre-vetted iOS developers that have previously worked in the same industry instantly.
            </p>
            
            <div>
              <p className="text-foreground font-semibold mb-4">What is your industry?</p>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    onClick={() => setSelectedIndustry(industry)}
                    className="rounded-full"
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden bg-secondary">
              <img
                src={test1}
                alt="Developer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
