import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import LoginBG from "../../public/LoginBG.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[#1a1a2e]"
      style={{ backgroundImage: `url(${LoginBG.src})` }}
    >
      {/* S2EE Logo */}
      <h1 className="absolute top-0 left-0 m-6 text-white text-3xl font-bold">
        S<span className="text-[#f5c76b]">2</span>EE
      </h1>

      {/* Login Container */}
      <div className="relative w-full max-w-6xl p-8 flex justify-center items-center ">
        {/* Login Wrapper */}
        <div className="relative bg-[#1a1a2e] rounded-lg p-8 w-[350px] shadow-lg text-center z-10">
          <h2 className="text-5xl font-semibold mb-8 text-white">Login</h2>

          {/* Login Form */}
          <form className="flex flex-col items-center">
            {/* Email Input */}
            <div className="w-full mb-4">
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5c76b]"
                required
              />
            </div>

            {/* Password Input */}
            <div className="w-full mb-6">
              <input
                type="password"
                id="password"
                placeholder="••••••"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5c76b]"
                required
              />
            </div>

            {/* Sign In Button */}
            <Link href="/affecter-contact">
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-[#2A6140] text-white font-semibold hover:bg-[#1e4a2d] transition-all"
            >
              Sign In
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </> 
  );
}
