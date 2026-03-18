import React from "react";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">RoomForU</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          A secure, verified platform designed to simplify student housing
          with trusted listings, easy booking, and transparent reviews.
        </p>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-red-500 mb-3">Problem</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Unverified and fake listings</li>
            <li>Dependence on brokers</li>
            <li>No secure booking system</li>
            <li>Lack of reviews & transparency</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Solution</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Verified property listings</li>
            <li>Role-based dashboards</li>
            <li>Secure token-based booking</li>
            <li>Student review system</li>
          </ul>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div className="p-5 border rounded-lg">
            <h3 className="font-bold text-blue-600">1. Register</h3>
            <p className="text-sm text-gray-600 mt-2">
              Sign up as Student or Owner
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-bold text-blue-600">2. Explore</h3>
            <p className="text-sm text-gray-600 mt-2">
              Browse and filter available rooms
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-bold text-blue-600">3. Book</h3>
            <p className="text-sm text-gray-600 mt-2">
              Send booking request & pay token
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-bold text-blue-600">4. Confirm</h3>
            <p className="text-sm text-gray-600 mt-2">
              Owner approves your booking
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Authentication (JWT)
            </h3>
            <p className="text-gray-600 mt-2">
              Secure login system with protected routes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Role-Based Access
            </h3>
            <p className="text-gray-600 mt-2">
              Separate dashboards for students and owners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Booking System
            </h3>
            <p className="text-gray-600 mt-2">
              Request-based booking with status tracking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Token Payment
            </h3>
            <p className="text-gray-600 mt-2">
              Secure partial payment using Razorpay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Reviews & Ratings
            </h3>
            <p className="text-gray-600 mt-2">
              Real feedback from verified students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600">
              Search & Filter
            </h3>
            <p className="text-gray-600 mt-2">
              Filter rooms by budget, location, and type.
            </p>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>

        <div className="flex justify-center gap-10 flex-wrap">

          <div>
            <h3 className="font-semibold">Siddhi Kharde</h3>
            <p className="text-gray-500 text-sm">Full Stack Developer</p>
          </div>

          <div>
            <h3 className="font-semibold">Gayatri Devadhe</h3>
            <p className="text-gray-500 text-sm">Frontend Developer</p>
          </div>

          <div>
            <h3 className="font-semibold">Shrushti Dhokchaule</h3>
            <p className="text-gray-500 text-sm">Backend Developer</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">
          Start Finding Your Perfect Room Today
        </h2>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200">
          Explore Rooms
        </button>
      </section>

    </div>
  );
}

export default About;