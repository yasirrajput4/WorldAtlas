import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Field Guide &mdash; 195 Nations
            </p>
          </div>

          <h1 className="mb-6 font-display text-4xl leading-[1.1] text-parchment sm:text-5xl lg:text-6xl">
            Explore the World,{" "}
            <span className="italic text-brass">One Country</span> at a Time.
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country">
            <button className="group inline-flex items-center gap-3 rounded-full bg-brass px-7 py-3.5 font-mono text-xs uppercase tracking-widest font-bold text-ink shadow-lg shadow-brass/10 transition-all duration-300 hover:bg-brass-light hover:shadow-brass/20 hover:scale-105 active:scale-95">
              Start Exploring
              <FaLongArrowAltRight className="text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </NavLink>
        </div>

        {/* Right Image Container */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative flex items-center justify-center">
            {/* Background Glow Overlay */}
            <div className="absolute inset-0 rounded-full bg-brass/10 blur-3xl" />

            <img
              src="/images/world.png"
              alt="world is beauty"
              className="relative w-4/5 max-w-md drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-transform duration-700 hover:scale-105 md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
