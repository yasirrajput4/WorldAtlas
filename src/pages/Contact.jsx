const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="rounded-2xl border border-line bg-surface/60 p-6 shadow-xl backdrop-blur-md sm:p-10">
          <h2 className="mb-2 text-center font-display text-3xl text-parchment sm:text-4xl">
            Contact Us
          </h2>
          <p className="mb-8 text-center text-sm text-muted">
            Have questions or feedback about WorldAtlas? Send us a message.
          </p>

          <form action={handleFormSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-mono text-xs uppercase tracking-wider text-muted"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted/60 transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                placeholder="Enter your name"
                name="username"
                required
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-mono text-xs uppercase tracking-wider text-muted"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted/60 transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                placeholder="Enter your email"
                name="email"
                required
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-mono text-xs uppercase tracking-wider text-muted"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                className="resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted/60 transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                rows="6"
                placeholder="Enter your message"
                name="message"
                required
                autoComplete="off"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-3 min-h-12 rounded-full bg-brass py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-lg shadow-brass/10 transition-all duration-200 hover:bg-brass-light hover:shadow-brass/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
