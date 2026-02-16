import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const projects = [
  { image: gallery1, title: "Custom Fireplace", category: "Interior" },
  { image: gallery2, title: "Stone Patio & Walls", category: "Outdoor Living" },
  { image: gallery3, title: "Stone Veneer Facade", category: "Exterior" },
  { image: gallery4, title: "Garden Walkway", category: "Landscaping" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-copper font-medium tracking-[0.3em] uppercase text-sm mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Recent Projects</h2>
          <div className="w-20 h-0.5 bg-copper mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-stone">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-copper text-sm tracking-wide uppercase">{project.category}</p>
                  <h3 className="font-display text-2xl font-bold text-cream">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;