"use client";

const clientsRow1 = [
  { name: "Buyhive", logo: "🐝" },
  { name: "Mogul", logo: "M", badge: "Active" },
  { name: "Bracketology", logo: "[tv]" },
  { name: "RXR", logo: "RXR" },
  { name: "Remoteshare", logo: "📱" },
  { name: "1871", logo: "1871", badge: "Active" },
  { name: "UCFS", logo: "UCFS" },
  { name: "Keller Offers", logo: "🏠" },
  { name: "Simple night", logo: "💤" },
  { name: "EVA", logo: "E" },
  { name: "Kopfspringer", logo: "K" },
  { name: "Kiwiwrite", logo: "K", badge: "Active" },
  { name: "Maro", logo: "🍋" },
];

const clientsRow2: { name: string; logo: string; badge?: string }[] = [
  { name: "Farechild", logo: "✈️" },
  { name: "Aurum", logo: "Au" },
  { name: "Big Shoulders Fund", logo: "🎯" },
  { name: "Biograph", logo: "📊" },
  { name: "YOVI", logo: "📍" },
  { name: "Skoller", logo: "🎓" },
  { name: "Shiny Registry", logo: "✨" },
  { name: "SOCPOC", logo: "🧠" },
  { name: "Hedge", logo: "🌿" },
  { name: "Loan Shout", logo: "💰" },
  { name: "Assuricare", logo: "❤️" },
  { name: "Arkstone", logo: "🪨" },
  { name: "Videobomb", logo: "🎥" },
];

const ClientsSection = () => {
  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          We've helped <span className="text-primary">250+</span> clients outsource their software development
        </h2>
        <p className="text-muted-foreground mb-10">
          And just to name a few...
        </p>

        {/* === ROW 1: Right → Left === */}
        <div className="overflow-hidden relative w-full mb-10">
          <div className="flex gap-6 animate-scroll-left">
            {clientsRow1.concat(clientsRow1).map((client, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-3 min-w-[200px] hover:shadow-lg transition-shadow relative"
              >
                {client.badge && (
                  <span className="absolute top-2 right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                    {client.badge}
                  </span>
                )}
                <div className="text-4xl">{client.logo}</div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    12 month engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === ROW 2: Left → Right === */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-6 animate-scroll-right">
            {clientsRow2.concat(clientsRow2).map((client, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-3 min-w-[200px] hover:shadow-lg transition-shadow relative"
              >
                {client.badge && (
                  <span className="absolute top-2 right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                    {client.badge}
                  </span>
                )}
                <div className="text-4xl">{client.logo}</div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    12 month engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
