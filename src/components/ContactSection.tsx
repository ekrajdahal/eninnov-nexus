import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

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
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-12 py-6 text-xl hover-glow transition-smooth border-0 mb-12"
          >
            Contact Us Today
          </Button>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@eninnov.com</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Silicon Valley, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;