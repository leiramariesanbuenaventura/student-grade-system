"use client"

// IMPORTING REACT
import { useState } from 'react'

// IMPORTING A GOOGLE FONT, NO DOWNLOAD NEEDED
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`${sora.className} h-screen w-full flex items-center justify-center bg-zinc-50`}>
      <div className="w-full max-w-md h-125 rounded-3xl flex items-center justify-center shadow-sm border border-zinc-200 flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-1 items-center text-center w-full">
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500">
            Log in to your Ticket Support account
          </p>
        </div>

        <form className="flex flex-col gap-5">

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
              className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-zinc-800">
              Password
            </label>
            {/* Wrapper to position the eye icon inside the input */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
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

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 active:bg-zinc-800 transition mt-1"
          >
            Log in
          </button>

        </form>
      </div>
    </div>
  );
}