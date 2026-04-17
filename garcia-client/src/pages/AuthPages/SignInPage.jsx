import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-300 focus:bg-slate-900';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <img src={logo} alt="BulldogEx" className="h-14 w-14 rounded-full border-2 border-amber-300 bg-slate-950 object-contain" />
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-amber-200">Welcome back</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Log In</h1>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-zinc-900" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-zinc-700 transition hover:text-zinc-900">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-1">
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Continue with Apple
          </Button>
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Continue with Google
          </Button>
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Continue with Facebook
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="rounded-full border border-slate-900/20 bg-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-900 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Home
          </Link>
          <p>
            No account yet?{' '}
            <Link to="/auth/signup" className="font-semibold text-slate-100 transition hover:text-white">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
