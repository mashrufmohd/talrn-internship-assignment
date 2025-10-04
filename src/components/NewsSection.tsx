const NewsSection = () => {
  const mediaLogos = [
    { name: "NBC", color: "from-red-500 via-yellow-500 to-green-500" },
    { name: "FOX NEWS", color: "from-blue-900 to-red-600" },
    { name: "CBS", color: "from-blue-600 to-blue-700" },
    { name: "USA TODAY", color: "from-blue-400 to-blue-500" }
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
              <div className={`bg-gradient-to-r ${media.color} text-white font-bold text-2xl px-6 py-4 rounded`}>
                {media.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
