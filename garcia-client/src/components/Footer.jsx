import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-amber-300 bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr,0.8fr,1fr]">
        <div className="space-y-4">
          <p className="text-2xl font-bold text-amber-200">BulldogExchange </p>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A campus marketplace shaped by navy blue and warm gold. Shop study essentials, accessories, and campus-ready favorites.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick links</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <Link to="/" className="block text-slate-200 hover:text-amber-200">Home</Link>
            <Link to="/about" className="block text-slate-200 hover:text-amber-200">About</Link>
            <Link to="/products" className="block text-slate-200 hover:text-amber-200">Products</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Support</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Questions? We’re here for every campus need.</p>
            <a href="mailto:support@bulldogex.shop" className="block text-slate-200 hover:text-amber-200">support@bulldogex.shop</a>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">Open Mon–Fri · 9am–6pm</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BulldogEx Shop. Home of gold and blue.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-slate-300 hover:text-amber-200">Home</Link>
            <Link to="/products" className="text-slate-300 hover:text-amber-200">Products</Link>
            <Link to="/about" className="text-slate-300 hover:text-amber-200">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
