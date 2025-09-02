import { Cog, Database, ClipboardList, Users } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Cog,
      title: "Engineering Consulting",
      description: "Advanced solutions tailored to semiconductor and industrial challenges.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Database,
      title: "Data Modernization",
      description: "Analytics and AI tools to optimize decision-making.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end planning, execution, and procurement support.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Users,
      title: "Staffing Services",
      description: "Top talent to power innovation and growth.",
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that drive innovation and excellence across every project
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl hover-lift transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`${service.gradient} w-16 h-16 rounded-lg flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-smooth`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-hero transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-5 transition-smooth -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;