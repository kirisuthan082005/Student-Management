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
      contact: "Contact Us",
      f1: "Student Records",
      f2: "Course Management",
      f3: "Reports",
    },
    ta: {
      title: "மாணவர் மேலாண்மை அமைப்பு",
      subtitle:
        "மாணவர்கள், பாடங்கள் மற்றும் செயல்திறனை எளிதாக நிர்வகிக்கவும்",
      search: "மாணவர்கள், பாடங்களை தேடுங்கள்...",
      getStarted: "தொடங்குங்கள்",
      features: "எங்கள் அம்சங்கள்",
      contact: "எங்களை தொடர்பு கொள்ள",
      f1: "மாணவர் பதிவுகள்",
      f2: "பாட மேலாண்மை",
      f3: "அறிக்கைகள்",
    },
    si: {
      title: "ශිෂ්‍ය කළමනාකරණ පද්ධතිය",
      subtitle:
        "සිසුන්, පාඨමාලා සහ කාර්ය සාධනය පහසුවෙන් කළමනාකරණය කරන්න",
      search: "සිසුන්, පාඨමාලා සොයන්න...",
      getStarted: "ආරම්භ කරන්න",
      features: "අපගේ විශේෂාංග",
      contact: "අප අමතන්න",
      f1: "ශිෂ්‍ය වාර්තා",
      f2: "පාඨමාලා කළමනාකරණය",
      f3: "වාර්තා",
    },
  };

  const t = texts[lang];

  // ✅ FEATURES
  const featuresList = [
    { title: t.f1, desc: "Store and manage student records efficiently" },
    { title: t.f2, desc: "Create and manage courses easily" },
    { title: t.f3, desc: "Generate reports and analytics" },
  ];

  // ✅ SERVICES (dynamic links + labels)
  const services = [
    {
      icon: FaBook,
      title: "Library",
      desc: "Manage books and resources",
      label: "Learn More",
      url: "https://openlibrary.org/",
    },
    {
      icon: FaBicycle,
      title: "Activities",
      desc: "Student extracurricular tracking",
      label: "Explore",
      url: "https://uk.pinterest.com/lynnehand/student-activities/",
    },
    {
      icon: FaDesktop,
      title: "E-Learning",
      desc: "Online learning platform",
      label: "View Details",
      url: "https://www.techtarget.com/whatis/definition/Web-based-training-e-learning",
    },
    {
      icon: FaGlobe,
      title: "Global Access",
      desc: "Access from anywhere",
      label: "Open",
      url: "https://www.goodwin.edu/glossary/enet",
    },
  ];

  // ✅ QUICK LINKS (dynamic)
  const quickLinks = [
    {
      icon: FaUserEdit,
      title: "Student Portal",
      label: "Open",
      url: "#/student",
    },
    {
      icon: FaSearch,
      title: "Search Records",
      label: "Search Now",
      url: "#/search",
    },
    {
      icon: FaGavel,
      title: "Rules & Policies",
      label: "View",
      url: "#/rules",
    },
    {
      icon: FaUniversity,
      title: "University Info",
      label: "Explore",
      url: "#/university",
    },
  ];

  const courses = [
    {
      date: "11th March 2026",
      tags: "Courses",
      title: "Diploma in Software Engineering – 2026 Intake Open!",
    },
    {
      date: "6th March 2026",
      tags: "Courses",
      title: "Diploma in GIS & Remote Sensing 2025/2026 (20th Intake)",
    },
    {
      date: "8th March 2026",
      tags: "Courses",
      title: "Diploma in Sinhala",
    },
    {
      date: "7th April 2026",
      tags: "Courses",
      title: "Diploma in English",
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
        <section className="text-center text-white py-20 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="mb-6 text-sm md:text-lg">{t.subtitle}</p>

          <div className="flex justify-center mb-6">
            <div className="flex w-full max-w-xl bg-white rounded-md overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder={t.search}
                className="flex-1 px-4 py-3 text-black outline-none"
              />
              <button className="bg-blue-600 text-white px-6 hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          <button className="bg-green-500 px-6 py-3 rounded-lg hover:scale-105 transition">
            {t.getStarted}
          </button>
        </section>

        {/* Features */}
       <section className="py-16 bg-white">
          <h3 className="text-3xl font-bold text-center mb-10">
            {t.features}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
            {featuresList.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-lg shadow 
                transition-all duration-500 
                hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
              >
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Services */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center space-y-2 hover:scale-110 transition">
                  <Icon className="text-red-600 text-4xl" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>

                  <a
                    href={item.url}
                    className="text-red-500 text-sm hover:underline"
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Background Image Section */}
        <div
          style={{ backgroundImage: `url(${bacimg})` }}
          className="min-h-[100vh] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">

            {/* Video */}
            <section className="py-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                Introduction Video
              </h2>

              <div className="flex justify-center">
                <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-red-800 text-white py-14">
              <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
                {quickLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="space-y-3 hover:scale-110 transition">
                      <Icon className="mx-auto text-4xl" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <a
                        href={item.url}
                        className="text-green-400 text-sm hover:underline"
                      >
                        {item.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Courses */}
            <section className="py-16 bg-gray-300">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">
              Upcoming Courses
            </h2>

            <div className="space-y-4">
              {courses.map((course, i) => (
                <div key={i} className="bg-white p-5 rounded shadowtransition rounded-lg shadow 
                transition-all duration-500 
                hover:-translate-y-3 hover:shadow-2xl hover:bg-white">
                  <p className="text-sm text-gray-500">{course.date}</p>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

          </div>
        </div>

        {/* Contact */}
         <section className="bg-white py-16 text-center">
          <h3 className="text-2xl font-bold mb-6">{t.contact}</h3>

          <p className="flex justify-center items-center gap-2 mb-6">
            <FaPhone className="cursor-pointer transition duration-300 hover:scale-125 hover:text-green-800 "/> +94 77 123 4567
          </p>

          <div className="flex justify-center gap-8 text-3xl text-blue-600">
            <FaFacebook className="cursor-pointer transition duration-300 hover:scale-125 hover:text-blue-800" />
            <FaInstagram className="cursor-pointer transition duration-300 hover:scale-125 hover:text-pink-600" />
            <FaTwitter className="cursor-pointer transition duration-300 hover:scale-125 hover:text-blue-400" />
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