import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 px-4 lg:px-12 text-base-content fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/#services">Our Services</Link>
            </li>
            <li>
              <Link href="/teams">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">Spaclean</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/#services">Our Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-neutral px-4 py-1" ><a href="/order"> Order Now</a></button>

      </div>
    </div>
  );
}
