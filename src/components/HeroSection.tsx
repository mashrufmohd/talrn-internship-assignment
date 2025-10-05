import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Developer {
  name: string;
  role: string;
  company: string;
  image: string;
}

const developers: Developer[] = [
  { name: "Kumar J", role: "Senior iOS Developer", company: "worked on McDonald'S", image: "/img1.png" },
  { name: "Thummar B", role: "iOS Development Lead", company: "Capital One", image: "/img2.png" },
  { name: "Garg R", role: "Senior iOS Developer", company: "PayTM", image: "/img3.png" },
  { name: "Pradhan R", role: "Lead iOS Developer", company: "Worked on Standard Chartered", image: "/img4.png" },
  { name: "Diouf O", role: "Senior iOS Developer", company: "Apple", image: "/img5.png" },
  { name: "Fawaz A", role: "Senior Software Engineer", company: "Share", image: "/img6.png" },
];

const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 px-4 md:px-10 -mt-16 ml-24">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Find & Hire iOS Developers with Ease
              </h1>
              <p className="text-lg text-muted-foreground">
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
              Looking for remote iOS dev jobs?{" "}
              <a href="#apply" className="text-primary font-semibold hover:underline">
                Apply here
              </a>
            </p>
          </div>

          {/* RIGHT SIDE: SCROLLING CARDS */}
          <div className="overflow-hidden relative w-full -mt-16">
            <div
              className="flex gap-6 animate-scroll"
              style={{ width: `${developers.length * 260}px` }}
            >
              {developers.concat(developers).map((dev, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 min-w-[240px] hover:shadow-lg transition-shadow card-animate"
                >
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full aspect-square rounded-lg mb-3 object-cover bg-secondary"
                  />
                  <h3 className="font-semibold text-foreground truncate">{dev.name}</h3>
                  <p className="text-sm text-primary font-medium truncate">{dev.role}</p>
                  <p className="text-sm text-muted-foreground truncate">Worked at {dev.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Explore <span className="font-semibold">411+ iOS developers</span> from{" "}
            <span className="font-semibold">71+ countries</span>, delivering{" "}
            <span className="font-semibold">2514+ projects</span>.
          </p>
          <p className="text-muted-foreground">
            Discover <span className="font-semibold">102+ industry experts</span> in E-commerce, Health & Fitness, and more with{" "}
            <span className="font-semibold">326+ technology specialists</span> in Swift, Objective-C & beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
