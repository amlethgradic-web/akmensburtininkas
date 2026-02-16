import { Landmark, Home, Flame, TreePine, Blocks, Wrench, ArrowRight } from "lucide-react";

const services = [
  { 
    icon: Landmark, 
    title: "Retaining Walls", 
    description: "Engineered stone retaining walls that combine structural integrity with natural beauty.",
    features: ["Structural Engineering", "Natural Stone", "Custom Design"]
  },
  { 
    icon: Flame, 
    title: "Fireplaces & Hearths", 
    description: "Custom stone fireplaces that become the centerpiece of your home.",
    features: ["Custom Design", "Heat Resistant", "Premium Materials"]
  },
  { 
    icon: Home, 
    title: "Stone Veneer", 
    description: "Transform any surface with authentic natural stone veneer applications.",
    features: ["Quick Installation", "Durable Finish", "Modern & Classic"]
  },
  { 
    icon: TreePine, 
    title: "Patios & Walkways", 
    description: "Beautiful flagstone and bluestone outdoor living spaces built to endure.",
    features: ["Slip Resistant", "Weather Durable", "Easy Maintenance"]
  },
  { 
    icon: Blocks, 
    title: "Foundation Work", 
    description: "Solid stone foundations and structural masonry for lasting stability.",
    features: ["Load Bearing", "Certified Work", "Lifetime Durable"]
  },
  { 
    icon: Wrench, 
    title: "Restoration", 
    description: "Expert restoration of historic stonework preserving original character.",
    features: ["Historic Matching", "Expert Care", "Preservation"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-stone-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-copper font-medium tracking-[0.3em] uppercase text-sm mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-20 h-0.5 bg-copper mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card p-8 rounded-lg shadow-stone hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-copper/10 hover:border-copper/30"
              >
                <IconComponent className="w-10 h-10 text-copper mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs bg-copper/10 text-copper px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="text-copper hover:text-copper/80 p-0 h-auto font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;