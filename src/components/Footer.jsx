import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Social Sidebar */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-2xl z-50">

        <a href="https://github.com/Satendra1030"
          target="_blank"
          className="text-gray-600 hover:text-white hover:scale-110 transition">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/satendra-prasad-kushwaha-028591406/"
          target="_blank"
          className="text-gray-600 hover:text-blue-400 hover:scale-110 transition">
          <FaLinkedin />
        </a>

        <a href="https://x.com/Johancruff1410"
          target="_blank"
          className="text-gray-600 hover:text-sky-300 hover:scale-110 transition">
          <FaTwitter />
        </a>

      </div>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-gray-800">

        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">My Portfolio</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate Frontend Developer focused on building modern,
              responsive, and interactive web applications using React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>

            <p className="text-gray-400 text-sm">Email: satendrakushwaha1030@email.com</p>
            <p className="text-gray-400 text-sm mb-4">Phone: +977-9864847017</p>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl">

              <a href="https://github.com/Satendra1030"
                target="_blank"
                className="text-gray-600 hover:text-white hover:scale-110 transition">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/satendra-prasad-kushwaha-028591406/"
                target="_blank"
                className="text-gray-600 hover:text-blue-400 hover:scale-110 transition">
                <FaLinkedin />
              </a>

              <a href="https://x.com/Johancruff1410"
                target="_blank"
                className="text-gray-600 hover:text-sky-300 hover:scale-110 transition">
                <FaTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 py-6">
          © {new Date().getFullYear()} My Portfolio. Built with React & Tailwind CSS.
        </div>

      </footer>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 hover:scale-110 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;