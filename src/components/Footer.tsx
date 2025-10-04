import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Information",
      links: ["About Us", "Our Story", "Press", "Careers", "Blog", "Contact Us"]
    },
    {
      title: "Talrn",
      links: ["View iOS Profiles", "Discover"]
    },
    {
      title: "Vendor",
      links: ["Apply As Vendor", "Vendor Login", "Get Verified", "Remote Jobs", "Resources"]
    }
  ];

  return (
    <footer className="bg-dark-bg text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <div className="flex items-center gap-2">
            <span>© 2022 - 2025</span>
            <span className="font-semibold text-background">Talrn</span>
            <span>- Labor Omnia Vincit ⚡ by</span>
            <a href="#" className="text-primary hover:underline">
              CG Advantage
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
