import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-amber-300 bg-slate-900 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-amber-300 lg:p-16">
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-[2rem] border-2 border-dashed border-amber-300 bg-slate-950/80 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <img src={logo} alt="BulldogEx" className="h-28 w-28 rounded-full border-2 border-amber-300 bg-slate-900 object-contain" />
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-amber-200">Official campus store</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">Campus merch made easy</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Sign in or create an account to manage orders, saved items, and pickup details.
              </p>
            </div>
          </div>
        </div>

        <main className="flex items-center bg-slate-950 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.45)] sm:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
