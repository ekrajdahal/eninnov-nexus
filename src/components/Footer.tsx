const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold text-gradient-hero mb-4 hover:scale-105 transition-smooth"
            >
              ENINNOV
            </button>
            <p className="text-muted-foreground">
              Engineering | Innovation | Solution
            </p>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex flex-wrap gap-6 md:justify-end">
            <button 
              onClick={() => scrollToSection('who-we-are')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('our-values')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Our Values
            </button>
            <button 
              onClick={() => scrollToSection('who-we-serve')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Who We Serve
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} ENINNOV LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;