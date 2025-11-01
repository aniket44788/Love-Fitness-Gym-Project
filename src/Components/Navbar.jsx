import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">
              LOVE<span className="text-red-600"> FITNESS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="/workout" className="hover:text-red-600 transition">Workout</Link>
            <Link to="/trainer" >
            <a className="hover:text-red-600 transition">Trainers</a>
            </Link>
            <a href="#pricing" className="hover:text-red-600 transition">Pricing</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/workout" className="hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Workout</Link>
              <a href="#trainers" className="hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Trainers</a>
              <a href="#pricing" className="hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition w-full">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
