const clients = [
  { name: "Remoteshare", logo: "📱" },
  { name: "1871", logo: "1871" },
  { name: "UCFS", logo: "UCFS", badge: "Active" },
  { name: "Keller Offers", logo: "🏠" },
  { name: "Simple night", logo: "$" },
  { name: "EVA", logo: "E" },
  { name: "Aurum", logo: "Au" },
  { name: "Big Shoulders Fund", logo: "🎯" },
  { name: "Biograph", logo: "📊" },
  { name: "YOVI", logo: "📍" },
  { name: "Skoller", logo: "🎓" },
  { name: "Shiny", logo: "✨" }
];

const ClientsSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            We've helped <span className="text-primary">250+</span> clients outsource their software development
          </h2>
          <p className="text-muted-foreground">And just to name a few...</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow relative"
            >
              {client.badge && (
                <span className="absolute top-2 right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                  {client.badge}
                </span>
              )}
              <div className="text-4xl">{client.logo}</div>
              <div className="text-center">
                <h3 className="font-semibold text-sm">{client.name}</h3>
                <p className="text-xs text-muted-foreground">12 month engagement</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
