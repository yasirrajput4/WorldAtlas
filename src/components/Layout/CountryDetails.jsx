import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        setCountry(res.data.data.objects[0]);
      } catch (err) {
        setError(err);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;
  if (error || !country)
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
        <h1 className="rounded-2xl border border-line bg-surface/80 p-8 text-center font-display text-xl text-parchment shadow-xl backdrop-blur-md sm:text-2xl">
          Something went wrong. Please try again later.
        </h1>
      </div>
    );

  const nativeNames = country.names.native
    ? Object.values(country.names.native)
        .map((n) => n.common)
        .join(", ")
    : "N/A";

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="rounded-2xl border border-line bg-surface/60 p-6 shadow-2xl backdrop-blur-md sm:p-10">
        {country && (
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {country.flag?.url_svg && (
              <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={country.flag.url_svg}
                  alt={country.flag.description || country.names.common}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div>
              <p className="mb-6 font-display text-2xl text-parchment sm:text-3xl">
                {country.names.official}
              </p>

              <div className="flex flex-col gap-3">
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Native Names:
                  </span>
                  <span className="min-w-0 text-right text-parchment wrap-break-word">
                    {nativeNames}
                  </span>
                </p>
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Population:
                  </span>
                  <span className="text-parchment">
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Region:
                  </span>
                  <span className="text-parchment">{country.region}</span>
                </p>
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Sub Region:
                  </span>
                  <span className="text-parchment">{country.subregion}</span>
                </p>
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Capital:
                  </span>
                  <span className="text-parchment">
                    {country.capitals?.length
                      ? country.capitals.map((c) => c.name).join(", ")
                      : "N/A"}
                  </span>
                </p>

                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Top Level Domain:
                  </span>
                  <span className="text-parchment">
                    {country.tlds?.[0] || "N/A"}
                  </span>
                </p>
                <p className="flex justify-between gap-4 border-b border-line/60 pb-2 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Currencies:
                  </span>
                  <span className="min-w-0 text-right text-parchment wrap-break-word">
                    {country.currencies?.length
                      ? country.currencies.map((cur) => cur.name).join(", ")
                      : "N/A"}
                  </span>
                </p>
                <p className="flex justify-between gap-4 font-mono text-xs sm:text-sm">
                  <span className="shrink-0 uppercase tracking-wider text-muted">
                    Languages:
                  </span>
                  <span className="min-w-0 text-right text-parchment wrap-break-word">
                    {country.languages?.length
                      ? country.languages.map((lang) => lang.name).join(", ")
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 flex justify-end">
          <NavLink to="/country">
            <button className="rounded-full border border-line bg-surface-2/40 px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-muted transition-all duration-200 hover:border-brass hover:bg-surface-2 hover:text-brass-light active:scale-95">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
