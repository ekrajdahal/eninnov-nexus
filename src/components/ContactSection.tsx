import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Content */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
            Partner with ENINNOV
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock engineering innovation, reliable project delivery, and access to exceptional talent. 
            Let's transform your vision into reality.
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-12 py-6 text-xl hover-glow transition-smooth border-0 mb-12"
          >
            <Link to="/client">
              Contact Us Today
            </Link>
          </Button>

          {/* Contact Information */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group">
              <a 
                href="mailto:contact@eninnovate.com"
                className="block hover:scale-105 transition-smooth"
              >
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground hover:text-primary transition-smooth">contact@eninnovate.com</p>
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (503) 567-9387</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Portland, OR</p>
            </div>

            <div className="text-center group">
              <a 
                href="https://www.linkedin.com/in/eninnov-196b8237b/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary-foreground"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Follow Us</h3>
                <p className="text-muted-foreground">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
