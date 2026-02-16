import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    text: "Akmens Burtininkas transformed our outdoor space with a beautiful stone patio. The craftsmanship is impeccable and the team was professional throughout.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Sarah Johnson",
    role: "Property Manager",
    text: "We hired them for a complete fireplace restoration. They matched the historic stonework perfectly. Highly recommended!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    text: "Professional, punctual, and meticulous. They completed our commercial facade project ahead of schedule without compromising quality.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-copper font-medium tracking-[0.3em] uppercase text-sm mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">What Our Clients Say</h2>
          <div className="w-20 h-0.5 bg-copper mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-charcoal-gradient border border-copper/20 rounded-lg p-8 hover:border-copper/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-cream font-semibold">{testimonial.name}</p>
                  <p className="text-copper text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;