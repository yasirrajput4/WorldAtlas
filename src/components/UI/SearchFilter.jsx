import { useState } from "react";

function SearchFilter({ search, setSearch, filter, setFilter, setCountries }) {
  const [activeSort, setActiveSort] = useState(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function handleSelectChange(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  const sortCountries = (value) => {
    setActiveSort(value);
    setCountries((prev) =>
      [...prev].sort((a, b) => {
        const nameA = a?.names?.common || "";
        const nameB = b?.names?.common || "";

        return value === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }),
    );
  };

  const sortButtonClass = (value) =>
    `flex min-h-11 items-center justify-center rounded-full px-4 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
      activeSort === value
        ? "bg-brass text-ink shadow-sm"
        : "text-muted hover:bg-surface-2 hover:text-brass-light"
    }`;

  return (
    <section className="mb-10 flex flex-col flex-wrap items-stretch gap-4 sm:flex-row sm:items-center justify-between">
      <div className="flex-1 min-w-full sm:min-w-60">
        <input
          type="text"
          placeholder="Search country by name..."
          value={search}
          onChange={handleInputChange}
          className="w-full rounded-full border border-line bg-surface/80 px-5 py-3 text-sm text-parchment placeholder:text-muted/60 transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass sm:py-2.5"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-full border border-line bg-surface/40 p-1">
          <button
            type="button"
            onClick={() => sortCountries("asc")}
            aria-pressed={activeSort === "asc"}
            className={sortButtonClass("asc")}
          >
            Asc
          </button>
          <button
            type="button"
            onClick={() => sortCountries("des")}
            aria-pressed={activeSort === "des"}
            className={sortButtonClass("des")}
          >
            Desc
          </button>
        </div>

        <div>
          <select
            className="min-h-11 w-full rounded-full border border-line bg-surface/80 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-parchment transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass sm:w-auto"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all" className="bg-surface text-parchment">
              All Regions
            </option>
            <option value="Africa" className="bg-surface text-parchment">
              Africa
            </option>
            <option value="Americas" className="bg-surface text-parchment">
              Americas
            </option>
            <option value="Asia" className="bg-surface text-parchment">
              Asia
            </option>
            <option value="Europe" className="bg-surface text-parchment">
              Europe
            </option>
            <option value="Oceania" className="bg-surface text-parchment">
              Oceania
            </option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
