function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  sortOrder,
  setSortOrder,
}) {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function handleSelectChange(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

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
            onClick={() => setSortOrder("asc")}
            className={`flex min-h-11 items-center justify-center rounded-full px-4 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
              sortOrder === "asc"
                ? "bg-brass text-ink shadow-sm"
                : "text-muted hover:bg-surface-2 hover:text-brass-light"
            }`}
          >
            Asc
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("des")}
            className={`flex min-h-11 items-center justify-center rounded-full px-4 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
              sortOrder === "des"
                ? "bg-brass text-ink shadow-sm"
                : "text-muted hover:bg-surface-2 hover:text-brass-light"
            }`}
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
            <option value="all">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
