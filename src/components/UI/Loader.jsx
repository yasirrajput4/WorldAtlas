function Loader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-4">
      <div className="relative flex items-center justify-center">
        {/* Subtle Background Glow */}
        <div className="absolute h-16 w-16 rounded-full bg-brass/10 blur-xl animate-pulse" />

        {/* Spinner Ring */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-line border-t-brass shadow-[0_0_15px_rgba(212,175,55,0.25)]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted animate-pulse">
        Loading Atlas...
      </p>
    </div>
  );
}

export default Loader;
