import { Button } from "@/components/ui/button";

const TeamSection = () => {
  return (
    <section className="bg-dark-bg text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
            Augment your team with highly-skilled iOS Developers
          </h2>
          <Button size="lg" variant="secondary" className="px-8">
            View Profiles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
