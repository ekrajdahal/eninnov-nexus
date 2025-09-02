import { Lightbulb, Award, Shield, Zap, CheckCircle } from 'lucide-react';

const OurValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering solutions that transform challenges into opportunities"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every project and partnership"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent, honest relationships built on trust"
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "Enabling teams and individuals to reach their full potential"
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent delivery and dependable partnership you can count on"
    }
  ];

  return (
    <section id="our-values" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
            Our Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundational principles that guide every decision and drive our commitment to excellence
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl text-center hover-lift transition-smooth group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-10 transition-smooth"></div>
              
              {/* Icon */}
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary group-hover:scale-110 transition-smooth">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient-hero transition-smooth">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;