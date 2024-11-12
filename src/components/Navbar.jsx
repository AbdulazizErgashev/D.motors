import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <main className="border-b-2 border-blue-100">
      <nav className="container w-full mx-auto flex items-center justify-between p-5 md:px-0">
        <Link to="/">
          <GiCarWheel className="text-blue-500 text-3xl md:text-5xl hover:text-blue-600 transition-all active:animate-spin" />
        </Link>
        <h1 className="text-blue-500 text-xl font-bold md:text-3xl ">
          D.Motors
        </h1>
        <div className="flex items-center gap-x-7 md:gap-x-12">
          <Link to="/cart" className="flex items-center relative">
            <HiShoppingCart className="text-blue-500 text-2xl md:text-3xl hover:text-blue-600 transition-all active:translate-y-1" />
            <span className="absolute -top-3 -right-3 text-blue-500 font-medium text-lg md:text-xl ">
              0
            </span>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 text-white font-bold py-1 px-3 md:py-2 md:px-6 rounded-lg hover:bg-blue-600 transition-all active:translate-y-1">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </main>
  );
}
