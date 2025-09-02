import { Cpu, Factory, Building2, Landmark } from 'lucide-react';

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      icon: Cpu,
      title: "Semiconductor",
      description: "Cutting-edge solutions for chip design and manufacturing"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Process optimization and automation solutions"
    },
    {
      icon: Building2,
      title: "Technology Companies",
      description: "Innovation acceleration and technical expertise"
    },
    {
      icon: Landmark,
      title: "Civic Institutions",
      description: "Public sector efficiency and modernization"
    }
  ];

  const triggers = [
    "Scaling operations efficiently",
    "Adopting automation technologies",
    "Solving complex engineering bottlenecks",
    "Optimizing data-driven decision making",
    "Accelerating innovation cycles"
  ];

  return (
    <section id="who-we-serve" className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 floating"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-15 floating" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
            Who We Serve
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Partnering with industry leaders and innovative organizations across sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Target Clients */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Target Clients
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {clientTypes.map((client, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-lg hover-lift transition-smooth group"
                >
                  <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <client.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {client.title}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Referrals & Triggers */}
          <div className="animate-fade-in-up">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Ideal Referral
              </h3>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                Leaders seeking efficiency, automation, and access to top talent who are ready to transform their operations and accelerate growth.
              </p>

              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Key Trigger Points
              </h4>
              <ul className="space-y-3">
                {triggers.map((trigger, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-foreground/80"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 glow-primary"></div>
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;