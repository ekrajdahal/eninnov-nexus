import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-15 floating" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="ENINNOV Logo" 
              className="h-20 md:h-24 w-auto object-contain opacity-70 blur-[0.5px] drop-shadow-sm"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient-hero text-glow">
            ENINNOV
          </h1>

          {/* Tagline */}
          <div className="text-lg md:text-xl font-medium mb-4 text-muted-foreground">
            Engineering | Innovation | Solution
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
            Your Trusted Partner in Engineering Innovation,<br />
            <span className="text-gradient-hero">Practical Solutions, and Exceptional Talent</span>
          </h2>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 text-lg hover-glow transition-smooth border-0"
            >
              Get in Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('what-we-do')}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-accent px-8 py-4 text-lg transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;