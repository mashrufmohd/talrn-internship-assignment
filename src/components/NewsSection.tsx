import cnbcLogo from "@/assets/CNBC.png";
import foxNewsLogo from "@/assets/FOX.png";
import cbsLogo from "@/assets/CBS.png";
import usaTodayLogo from "@/assets/USA-TODAY.png";

const NewsSection = () => {
  const mediaLogos = [
    { name: "CNBC", logo: cnbcLogo },
    { name: "FOX NEWS", logo: foxNewsLogo },
    { name: "CBS", logo: cbsLogo },
    { name: "USA TODAY", logo: usaTodayLogo }
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Talrn</span> in the news
          </h2>
          <p className="text-muted-foreground text-lg">
            We are recognized as one of the leading platforms for on-demand talent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={media.logo}
                alt={media.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
