"use client"

// IMPORTING REACT
import { useState } from 'react'

// IMPORTING ROUTER
import { useRouter } from 'next/navigation';

// IMPORTING A GOOGLE FONT, NO DOWNLOAD NEEDED
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong. Please try again.');
        return;
      }

      router.push('/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${sora.className} h-screen w-full flex items-center justify-center bg-zinc-50`}>
      <div className="w-full max-w-md rounded-3xl flex items-center justify-center shadow-sm border border-zinc-200 flex-col gap-6 py-10">

        {/* Header */}
        <div className="flex flex-col gap-1 items-center text-center w-full">
          <i className="fa-regular fa-user text-2xl text-zinc-900 my-4"></i>
          <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-zinc-500">
            Sign up to get started today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full px-16 py-2">

          {/* Name Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="name" className="text-sm font-medium text-zinc-800">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Jane Doe"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-zinc-800">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition"
              >
                <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-800">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition"
              >
                <i className={`fa-regular ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-xs text-red-500 -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 active:bg-zinc-800 transition mt-1"
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-zinc-500">
            Already have an account?{' '}
            <a href="/auth" className="font-medium text-zinc-900 hover:underline transition">
              Log in
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}