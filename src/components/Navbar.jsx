import { useState } from "react"
import logo from "../assets/Aura.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ["About", "Skills", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Text */}
        <a href="#home" className="flex items-center gap-2">

          {/* Image */}
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 object-cover rounded-full border border-gray-700"
          />

          <span className="text-xl font-bold text-white tracking-wide">
            Nexora
          </span>

        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={"#" + link.toLowerCase()}
                className="text-gray-400 hover:text-white transition font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black border-t border-gray-800 px-6 pb-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={"#" + link.toLowerCase()}
                className="text-gray-400 hover:text-white transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar