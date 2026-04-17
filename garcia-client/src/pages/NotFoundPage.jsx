import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-6 rounded-[2rem] border-2 border-amber-300 bg-slate-900 p-8 shadow-lg shadow-slate-950/20 sm:p-12">
            <div className="flex flex-col items-start gap-4 rounded-3xl bg-slate-950 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-300 text-4xl font-bold text-slate-950">
                404
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-300">Page missing</p>
                <h1 className="mt-3 text-4xl font-bold text-slate-100 sm:text-5xl">Oops — we can’t find that page.</h1>
              </div>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-300">
              The link may have expired, been mistyped, or moved. Use the buttons below to continue browsing the site or jump straight to the store.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products" className="bg-amber-300 text-slate-950 border-amber-300 hover:bg-amber-200">Browse Products</Button>
              <Button to="/about" className="bg-amber-300 text-slate-950 border-amber-300 hover:bg-amber-200">Learn About Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border-2 border-amber-300 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Quick link</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-100">Shop the latest</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Jump back into our catalog and discover new items with the same campus-friendly style.</p>
              <Button to="/products" className="mt-5 bg-amber-300 text-slate-950 border-amber-300 hover:bg-amber-200">View Products</Button>
            </article>

            <article className="rounded-3xl border-2 border-amber-300 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Need help?</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-100">Support center</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Reach out anytime for order questions, shipping info, or product recommendations.</p>
              <a href="mailto:support@bulldogex.shop" className="mt-5 inline-flex rounded-full border-2 border-amber-300 bg-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300 transition hover:bg-amber-300 hover:text-slate-950">Email Support</a>
            </article>

            <article className="rounded-3xl border-2 border-amber-300 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Explore</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-100">Return to campus essentials</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Whether you need a new study accessory or a practical daily essential, we’ve got you covered.</p>
              <Button to="/" className="mt-5 bg-amber-300 text-slate-950 border-amber-300 hover:bg-amber-200">Go Home</Button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage
