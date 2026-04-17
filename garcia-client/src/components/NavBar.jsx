import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-amber-300 bg-amber-300/15 text-amber-100'
      : 'border-transparent text-slate-200 hover:border-amber-300 hover:bg-amber-300/10 hover:text-amber-100',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-slate-100 bg-slate-100 text-slate-950'
      : 'border-amber-300 bg-amber-300 text-slate-950 hover:bg-amber-200',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-amber-300 bg-slate-950/95 backdrop-blur-sm shadow-sm shadow-slate-950/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-11 w-11 rounded-full border-2 border-amber-300 bg-slate-900 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-slate-100">BulldogExchange</p>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Campus essentials</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <nav className="flex items-center gap-2">
            {authLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={authLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
