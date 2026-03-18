import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg">
          We'd love to hear from you. Get in touch with us.
        </p>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600 text-sm mt-2">+91 9876543210</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600 text-sm mt-2">support@roomforu.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-600 text-sm mt-2">India</p>
        </div>

      </section>

      {/* MAIN SECTION */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-2xl font-bold mb-6">Send Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">
            Send Message
          </button>
        </form>

        {/* SIDE INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions about booking, listings, or payments?
            Our team is here to help you with everything related to RoomForU.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Verified listings support</li>
            <li>✔ Booking & payment help</li>
            <li>✔ Owner assistance</li>
          </ul>
        </div>

      </section>

      {/* MAP */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 rounded-xl shadow"
        ></iframe>
      </section>

    </div>
  );
}

export default Contact;