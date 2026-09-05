import { useState } from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flag, names, population, region, capitals } = country;
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <li className="list-none perspective-[1000px]">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${names.common} card, ${
          flipped ? "showing details, tap to flip back" : "tap for details"
        }`}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        className={`group relative h-80 w-full cursor-pointer rounded-2xl outline-none transition-transform duration-700 transform-3d focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
          flipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface backface-hidden">
          {flag?.url_svg && (
            <div className="h-48 w-full shrink-0 overflow-hidden bg-surface-2">
              <img
                src={flag.url_svg}
                alt={names.common}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-1 items-center justify-between gap-2 p-5">
            <p className="truncate font-display text-lg font-semibold text-parchment">
              {names.common}
            </p>
            <span className="shrink-0 font-mono text-xs uppercase text-brass">
              Tap →
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-brass/60 bg-surface p-6 backface-hidden transform-[rotateY(180deg)]">
          <div className="flex flex-col gap-3">
            <p className="font-display text-xl text-brass">{names.common}</p>

            <div className="flex flex-col gap-2 pt-2">
              <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
                <span className="uppercase tracking-wider text-muted">
                  Population:
                </span>
                <span className="text-parchment">
                  {population.toLocaleString()}
                </span>
              </p>
              <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
                <span className="uppercase tracking-wider text-muted">
                  Region:
                </span>
                <span className="text-parchment">{region}</span>
              </p>
              <p className="flex justify-between font-mono text-xs">
                <span className="uppercase tracking-wider text-muted">
                  Capital:
                </span>
                <span className="text-parchment">
                  {capitals?.[0]?.name || "N/A"}
                </span>
              </p>
            </div>
          </div>

          <NavLink
            to={`/country/${encodeURIComponent(names.common)}`}
            className="mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-brass/40 py-2.5 font-mono text-xs uppercase tracking-widest text-brass transition-colors duration-200 hover:bg-brass hover:text-ink active:scale-95">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
