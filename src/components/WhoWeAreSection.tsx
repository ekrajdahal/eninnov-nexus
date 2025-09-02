import teamImage from '@/assets/team-holographic.jpg';
import { Users, BarChart3, Settings, UserCheck } from 'lucide-react';

const WhoWeAreSection = () => {
  const teamMembers = [
    {
      icon: Settings,
      title: "Engineering Experts",
      description: "Advanced technical solutions for complex challenges"
    },
    {
      icon: BarChart3,
      title: "Data Analysts",
      description: "Analytics and insights to drive smart decisions"
    },
    {
      icon: Users,
      title: "Project Managers",
      description: "End-to-end execution and delivery expertise"
    },
    {
      icon: UserCheck,
      title: "Top Talent",
      description: "Exceptional professionals ready to innovate"
    }
  ];

  return (
    <section id="who-we-are" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-hero">
              Meet the ENINNOV Team
            </h2>
            
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-card rounded-lg hover-lift transition-smooth"
                >
                  <div className="bg-gradient-primary p-3 rounded-lg glow-primary">
                    <member.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {member.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-xl opacity-20"></div>
              <img 
                src={teamImage} 
                alt="ENINNOV Team - Futuristic Engineering Collaboration"
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;