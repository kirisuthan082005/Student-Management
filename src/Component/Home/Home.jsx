import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaBook,
  FaBicycle,
  FaDesktop,
  FaGlobe,
  FaUserEdit,
  FaSearch,
  FaGavel,
  FaUniversity,
} from "react-icons/fa";

import bacimg from "../../assets/baner.jpg";
import Video from "../../assets/video2.mp4";
import bgVideo from "../../assets/vide01.mp4";

const Home = () => {
  const [lang, setLang] = useState("en");

  const texts = {
    en: {
      title: "Student Management System",
      subtitle: "Manage students, courses, and performance easily",
      search: "Search students, courses...",
      getStarted: "Get Started",
      features: "Our Features",
      f1: "Student Records",
      f2: "Course Management",
      f3: "Reports",
      contact: "Contact Us",
    },
    ta: {
      title: "மாணவர் மேலாண்மை அமைப்பு",
      subtitle:
        "மாணவர்கள், பாடங்கள் மற்றும் செயல்திறனை எளிதாக நிர்வகிக்கவும்",
      search: "மாணவர்கள், பாடங்களை தேடுங்கள்...",
      getStarted: "தொடங்குங்கள்",
      features: "எங்கள் அம்சங்கள்",
      f1: "மாணவர் பதிவுகள்",
      f2: "பாட மேலாண்மை",
      f3: "அறிக்கைகள்",
      contact: "எங்களை தொடர்பு கொள்ள",
    },
    si: {
      title: "ශිෂ්‍ය කළමනාකරණ පද්ධතිය",
      subtitle:
        "සිසුන්, පාඨමාලා සහ කාර්ය සාධනය පහසුවෙන් කළමනාකරණය කරන්න",
      search: "සිසුන්, පාඨමාලා සොයන්න...",
      getStarted: "ආරම්භ කරන්න",
      features: "අපගේ විශේෂාංග",
      f1: "ශිෂ්‍ය වාර්තා",
      f2: "පාඨමාලා කළමනාකරණය",
      f3: "වාර්තා",
      contact: "අප අමතන්න",
    },
  };

  const t = texts[lang];

  const courses = [
    {
      date: "11th March 2026",
      tags: "Courses",
      title: "Diploma in Software Engineering – 2026 Intake Open!",
    },
    {
      date: "6th March 2026",
      tags: "Courses",
      title: "Diploma in GIS & Remote Sensing 2025-2026 (20th Intake)",
    },
    {
      date: "12th February 2026",
      tags: "Courses, Courses",
      title:
        "Certificate course on Quantitative Data Analysis – 2026 Batch 1",
    },
    {
      date: "11th February 2026",
      tags: "Courses",
      title: "Diploma in Software Engineering – 2026",
    },
    {
      date: "28th January 2026",
      tags: "Courses",
      title:
        "Advanced Diploma in Sports Science and Management – 4th Intake (2026/2027)",
    },
    {
      date: "3rd November 2025",
      tags: "Courses",
      title:
        "Certificate Course on Environmental Management Systems (EMS)",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-x-hidden">

      {/* Background Video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* FIXED: Only ONE overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">

        {/* Language Selector */}
        <div className="flex justify-end p-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-3 py-2 rounded bg-white text-black shadow"
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
            <option value="si">සිංහල</option>
          </select>
        </div>

        {/* Hero */}
        <section className="text-center text-white py-20 md :py-28 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="mb-6 text-sm md:text-lg">{t.subtitle}</p>

          <div className="flex justify-center mb-6">
            <div className="flex flex-col md:flex-row w-full max-w-xl bg-white rounded-md overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder={t.search}
                className="flex-1 px-4 py-3 text-black outline-none w-full"
              />
              <button className="bg-blue-600 text-white px-6  py-3 md:py-0 transition hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          <button className="bg-green-500 px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-green-600">
            {t.getStarted}
          </button>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-100">
          <h3 className="text-3xl font-bold text-center mb-10">
            {t.features}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-10">
            {[t.f1, t.f2, t.f3, t.f3, t.f3, t.f3].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow transition transform hover:-translate-y-2 hover:shadow-xl"
              >
                <h4 className="font-bold text-lg mb-2">{item}</h4>
                <p className="text-gray-600">
                  Generate performance reports instantly.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[FaBook, FaBicycle, FaDesktop, FaGlobe].map((Icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 transition transform hover:scale-110"
              >
                <Icon className="text-red-600 text-4xl" />
                <h3 className="font-semibold text-gray-800">Service</h3>
                <p className="text-red-500 text-sm cursor-pointer hover:underline">
                  Learn More
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Background Image Section */}
        <div
          style={{ backgroundImage: `url(${bacimg})` }}
          className="min-h-[100vh] md:min-h-screen bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">

            {/* Video */}
            <section className="py-10 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Introduction Video
              </h2>

              <div className="flex justify-center">
                <video
                  controls
                  className="w-full max-w-3xl rounded-lg shadow-lg px-2 md:px-0"
                >
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-red-800 text-white py-14">
              <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

                {[FaUserEdit, FaSearch, FaGavel, FaUniversity].map((Icon, i) => (
                  <div
                    key={i}
                    className="space-y-3 transition transform hover:scale-110"
                  >
                    <Icon className="mx-auto text-4xl" />
                    <h3 className="text-xl font-bold">Quick Link</h3>
                    <p className="text-green-400 text-sm cursor-pointer hover:underline">
                      Visit
                    </p>
                  </div>
                ))}

              </div>
            </section>

            {/* Courses */}
            <div className="max-w-5xl mx-auto p-4 md:p-6">
              <h2 className="text-3xl font-bold mb-6 text-blue-500">
                Upcoming Courses
              </h2>

              {courses.map((course, i) => (
                <div
                  key={i}
                  className="border-b pb-4 hover:bg-gray-50 transition"
                >
                  <p className="text-sm text-gray-500">{course.date}</p>
                  <p className="text-xs text-blue-500">{course.tags}</p>
                  <h3 className="text-lg font-semibold">
                    {course.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Contact */}
        <section className="bg-white py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">{t.contact}</h3>

          <p className="flex justify-center items-center gap-2 text-gray-700 mb-4">
            <FaPhone /> +94 77 123 4567
          </p>

          <div className="flex justify-center gap-6 text-2xl text-blue-600">
            <FaFacebook className="cursor-pointer hover:text-blue-800 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-600 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4">
          <p>© 2026 Student Management System</p>
        </footer>

      </div>
    </div>
  );
};

export default Home;