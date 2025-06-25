import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-4 py-4">
          <NavLink
            to="/"
            className="text-2xl lg:text-3xl font-extrabold tracking-tight"
          >
            <span className="text-neutral-900">Synergy</span>
            <span className="text-red-600 ml-1">Algo</span>
          </NavLink>
          <ul className="hidden md:flex space-x-8 lg:space-x-10 font-semibold text-gray-500 text-sm">
            <li>
              <NavLink to='/about' className="hover:text-black transition-colors">About us</NavLink>
            </li>
            <li>
              <NavLink to='/services' className="hover:text-black transition-colors">Services</NavLink>
            </li>
            <li>
              <NavLink to='/cases' className="hover:text-black transition-colors">Cases</NavLink>
            </li>
            <li>
              <NavLink to='#' className="hover:text-black transition-colors">Technologies</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="hover:text-black transition-colors">Contacts</NavLink>
            </li>
          </ul>

          <button className="hidden md:inline-block px-6 py-2 bg-yellow-500 hover:bg-transparent transition-all rounded font-semibold text-black text-sm border border-yellow-500 hover:border-black cursor-pointer">
            Let's chat
          </button>

          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-black focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </nav>

        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            <ul className="flex-1 flex flex-col space-y-6 font-semibold text-gray-700">
              <li>
                <NavLink
                  to='/about'
                  className="block py-3 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/cases'
                  className="block py-3 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  className="block py-3 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='#'
                  className="block py-3 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Technologies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className="block py-3 hover:text-violet-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>

            <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 transition-colors rounded-lg font-semibold text-black text-sm">
              Let's chat
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/95 bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>
    </>
  );
};