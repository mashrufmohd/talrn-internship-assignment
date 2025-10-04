import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Developer {
  name: string;
  role: string;
  company: string;
  image: string;
}

const developers: Developer[] = [
  { name: "Dibut O", role: "Senior iOS Developer", company: "Apple", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dibut" },
  { name: "Fawaz A", role: "Senior Software Engineer", company: "Share", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fawaz" },
  { name: "Kumar J", role: "Senior iOS Developer", company: "McDonald's", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kumar" },
  { name: "Thummar B", role: "iOS Development Lead", company: "Capital One", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thummar" },
];

const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find & Hire iOS Developers with Ease
              </h1>
              <p className="text-xl text-muted-foreground">
                Bring the right talent to your team effortlessly with Talrn
              </p>
            </div>

            <p className="text-muted-foreground">
              Hire pre-vetted remote iOS developers with strong technical & communication skills within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your work email"
                className="flex-1 h-12"
              />
              <Button size="lg" className="h-12 px-8">
                Hire iOS Dev
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Looking for remote iOS dev jobs{" "}
              <a href="#apply" className="text-primary font-semibold hover:underline">
                Apply here
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full aspect-square rounded-lg mb-3 object-cover bg-secondary"
                />
                <h3 className="font-semibold text-foreground">{dev.name}</h3>
                <p className="text-sm text-primary font-medium">{dev.role}</p>
                <p className="text-sm text-muted-foreground">Worked at {dev.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Explore <span className="font-semibold">411+ iOS developers</span> from{" "}
            <span className="font-semibold">71+ countries</span>, delivering{" "}
            <span className="font-semibold">2514+ projects</span>.
          </p>
          <p className="text-muted-foreground">
            Discover <span className="font-semibold">102+ industry expert</span> in Ecommerce, Health and Fitness & more with,{" "}
            <span className="font-semibold">326+ technology specialists</span> in Swift, ObjectiveC & more
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
