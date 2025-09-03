import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpeg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-card/90 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="ENINNOV Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="text-2xl font-bold text-gradient-hero">
              ENINNOV
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('who-we-are')}
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('our-values')}
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              Our Values
            </button>
            <button 
              onClick={() => scrollToSection('who-we-serve')}
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              Who We Serve
            </button>
            <Link 
              to="/career"
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              Career
            </Link>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-foreground"
            >
              ☰
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;