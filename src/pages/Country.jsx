import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data.data.objects);
      } catch (err) {
        setError(err);
      }
    });
  }, []);

  if (isPending) return <Loader />;
  if (error)
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
        <h1 className="rounded-2xl border border-line bg-surface/80 p-8 text-center font-display text-xl text-parchment shadow-xl backdrop-blur-md sm:text-2xl">
          Something went wrong. Please try again later.
        </h1>
      </div>
    );

  const searchCountry = (country) => {
    if (search) {
      return country.names.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) =>
      country.flag?.url_svg && searchCountry(country) && filterRegion(country),
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {filterCountries.length === 0 ? (
        <div className="my-16 flex flex-col items-center justify-center rounded-2xl border border-line bg-surface/40 p-12 text-center backdrop-blur-md">
          <p className="font-display text-xl text-parchment">
            No countries found
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            Try adjusting your search or filter settings.
          </p>
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default Country;
