import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {showBanner && (
        <div className="bg-primary text-primary-foreground py-3 px-4 relative">
          <div className="container mx-auto flex items-center justify-center gap-3 text-sm">
            <span className="bg-background text-foreground px-2 py-0.5 rounded text-xs font-semibold">
              NEW
            </span>
            <span className="hidden sm:inline">
              Get a Guaranteed Developer within 24 working hours
            </span>
            <span className="sm:hidden">Guaranteed Developer in 24h</span>
            <a href="#" className="font-semibold underline">
              Hire candidates
            </a>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 hover:opacity-70 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <a href="/" className="text-3xl font-bold text-primary">
                Talrn
              </a>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#why" className="text-foreground hover:text-primary transition-colors">
                  Why
                </a>
                <a href="#industries" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Industries
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#find" className="text-foreground hover:text-primary transition-colors">
                  Find iOS Dev
                </a>
                <a href="#vendor" className="text-foreground hover:text-primary transition-colors">
                  Apply as Vendor
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Button variant="default" size="lg" className="hidden sm:inline-flex">
                Hire iOS Dev
              </Button>
              <Link to="/admin/auth/login">
                <Button variant="ghost" size="lg" className="hidden sm:inline-flex">
                  Login
                </Button>
              </Link>
              <Button variant="default" size="sm" className="sm:hidden">
                Hire
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#why"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why
              </a>
              <a
                href="#industries"
                className="text-foreground hover:text-primary transition-colors py-2 flex items-center gap-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#find"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find iOS Dev
              </a>
              <a
                href="#vendor"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply as Vendor
              </a>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire iOS Dev
                </Button>
                <Link to="/admin/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
