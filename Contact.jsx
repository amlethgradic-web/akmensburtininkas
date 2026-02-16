import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    { icon: Phone, text: "(555) 123-4567", label: "Call us", href: "tel:+15551234567" },
    { icon: Mail, text: "info@stonecraft.com", label: "Email us", href: "mailto:info@stonecraft.com" },
    { icon: MapPin, text: "Serving the Greater Metro Area", label: "Location" },
    { icon: Clock, text: "Mon–Sat: 7:00 AM – 6:00 PM", label: "Hours" },
  ];

  return (
    <section id="contact" className="py-24 bg-charcoal-gradient">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-copper font-medium tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10">
              Contact us for a free consultation and estimate. We'll visit your site, discuss your vision, and provide a detailed plan.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-copper" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-cream font-medium hover:text-copper transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-cream font-medium">{item.text}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-cream/5 backdrop-blur-sm rounded-lg p-8 border border-cream/10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-cream/5 border border-cream/10 rounded-md px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-cream/5 border border-cream/10 rounded-md px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors" 
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-cream/5 border border-cream/10 rounded-md px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors" 
              />
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-cream/5 border border-cream/10 rounded-md px-4 py-3 text-cream/50 focus:outline-none focus:border-copper transition-colors"
              >
                <option value="">Select Service</option>
                <option value="retaining-walls">Retaining Walls</option>
                <option value="fireplaces">Fireplaces & Hearths</option>
                <option value="stone-veneer">Stone Veneer</option>
                <option value="patios">Patios & Walkways</option>
                <option value="foundation">Foundation Work</option>
                <option value="restoration">Restoration</option>
                <option value="tiling">Tiling</option>
              </select>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-cream/5 border border-cream/10 rounded-md px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors resize-none" 
              />
              <button 
                type="submit" 
                className="w-full bg-copper hover:bg-copper/90 text-cream font-semibold py-6 text-base tracking-wide rounded transition-all"
              >
                Request Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;