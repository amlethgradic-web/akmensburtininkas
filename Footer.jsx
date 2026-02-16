import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-copper/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <div className="font-display text-2xl font-bold text-cream tracking-wide">
                AKMENS<span className="text-copper"> BURTININKAS</span>
              </div>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed">
              Master stone craftsmanship built to last generations. Licensed & Insured.
            </p>
          </div>

          {/* Services Links */}
          <div className="md:col-span-1">
            <h4 className="font-display text-sm font-bold text-cream uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-cream/60 hover:text-copper transition-colors text-sm">Retaining Walls</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-copper transition-colors text-sm">Fireplaces</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-copper transition-colors text-sm">Stone Veneer</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-copper transition-colors text-sm">Patios & Walkways</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-copper transition-colors text-sm">Restoration</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-display text-sm font-bold text-cream uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cream/60 hover:text-copper transition-colors text-sm">About Us</a></li>
              <li><a href="#gallery" className="text-cream/60 hover:text-copper transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-cream/60 hover:text-copper transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-cream/60 hover:text-copper transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-cream/60 hover:text-copper transition-colors text-sm">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-display text-sm font-bold text-cream uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+37064539734" className="flex items-center gap-2 text-cream/60 hover:text-copper transition-colors text-sm group">
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+370 645 39 734</span>
              </a>
              <a href="mailto:akmensburtininkas@pm.me" className="flex items-center gap-2 text-cream/60 hover:text-copper transition-colors text-sm group">
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">akmensburtininkas@pm.me</span>
              </a>
              <a href="https://www.akmensburtininkas.lt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream/60 hover:text-copper transition-colors text-sm group">
                <MapPin className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>akmensburtininkas.lt</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-copper/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center hover:bg-copper/20 transition-colors group">
                <Facebook className="w-5 h-5 text-copper group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center hover:bg-copper/20 transition-colors group">
                <Instagram className="w-5 h-5 text-copper group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center hover:bg-copper/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-copper group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-cream/40 text-xs text-center md:text-right">
              © 2026 Akmens Burtininkas. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-copper/5 border-t border-copper/10 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-cream/70 text-xs">
              <p className="font-bold text-copper mb-1">25+</p>
              <p>Years Experience</p>
            </div>
            <div className="text-cream/70 text-xs">
              <p className="font-bold text-copper mb-1">500+</p>
              <p>Projects Done</p>
            </div>
            <div className="text-cream/70 text-xs">
              <p className="font-bold text-copper mb-1">100%</p>
              <p>Licensed & Insured</p>
            </div>
            <div className="text-cream/70 text-xs">
              <p className="font-bold text-copper mb-1">24/7</p>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;