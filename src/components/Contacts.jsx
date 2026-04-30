import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_886hs3b",
        "template_56zzt7s",
        form.current,
        "XqK5u4aSzib1qySfH"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-black px-6 py-20"
    >
      <div className="max-w-3xl w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Feel free to reach out for internships, projects, or collaboration.
        </p>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg focus:border-blue-500 outline-none transition"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg focus:border-blue-500 outline-none transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full bg-black border border-gray-700 text-white p-3 rounded-lg focus:border-blue-500 outline-none transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition transform hover:scale-105 ${
              loading
                ? "bg-gray-700 text-gray-400"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contacts;