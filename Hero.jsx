import { Star, CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCAyMCAwIDEgMCA0MCAwYTIwIDIwIDAgMSAwLTQwIDAiIHN0cm9rZT0iI0Q0Qjg5NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')`
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/50 rounded-full px-4 py-2 mb-6">
          <Star className="w-4 h-4 text-copper fill-copper" />
          <span className="text-copper text-sm font-medium">25+ Years · Licensed & Insured</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6">
          Built to Last
          <br />
          <span className="text-copper">Generations</span>
        </h1>

        <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Expert stone masonry and tiling services crafted with precision, passion, and over 25 years of experience in natural stone construction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-copper hover:bg-copper/90 text-cream font-semibold px-8 py-6 text-base tracking-wide rounded transition-all">
            Get a Free Estimate
          </button>
          <button className="border border-cream/30 text-cream hover:bg-cream/10 font-semibold px-8 py-6 text-base tracking-wide rounded transition-all">
            View Our Work
          </button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-cream/80 text-sm">
            <CheckCircle className="w-5 h-5 text-copper" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream/80 text-sm">
            <CheckCircle className="w-5 h-5 text-copper" />
            <span>Lifetime Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream/80 text-sm">
            <CheckCircle className="w-5 h-5 text-copper" />
            <span>Flexible Financing</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-copper" />
      </div>
    </section>
  );
};

export default Hero;