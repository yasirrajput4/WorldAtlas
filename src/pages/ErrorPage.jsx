import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        {/* Animated/Styled 404 Badge */}
        <p className="font-mono text-7xl font-extrabold tracking-widest text-brass sm:text-9xl">
          404
        </p>

        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-parchment sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {error?.data ||
            "Sorry, the page you are looking for doesn't exist or has been moved."}
        </p>

        <div className="mt-8">
          <NavLink to="/">
            <button className="inline-flex items-center justify-center rounded-full border border-brass/40 bg-brass px-8 py-3 font-mono text-xs uppercase tracking-widest text-ink font-semibold transition-all duration-200 hover:bg-brass-light hover:shadow-lg hover:shadow-brass/20">
              Go Back Home
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
