import React, { useState, useMemo } from "react";

const Listmanagement = () => {
  // Memoizing the initial data so it's only created once
  const initialData = useMemo(() => {
    let data = [];
    for (let i = 1; i <= 50; i++) {
      data.push({
        id: i,
        name: `Student ${i}`,
        course: ["IT", "CS", "SE", "AI"][i % 4],
        age: 18 + (i % 5),
      });
    }
    return data;
  }, []);

  const [students, setStudents] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Handle Deleting a student
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Filter and Sort logic
  const filteredStudents = students
    .filter((s) => {
      const q = search.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.course.toLowerCase().includes(q) ||
        s.id.toString().includes(q)
      );
    })
    .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 p-6 font-sans text-gray-800 flex flex-col justify-between">
      
      <div>
        {/* 🔹 Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            STUDENT's HUB
          </h1>
          <p className="text-black-600 mt-2">Sponsored by Mohanapiriyan OMS Academy</p>
        </header>

        {/* 🔹 Search & Sort Actions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search name, ID, or course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-2xl border-none shadow-xl w-80 focus:ring-4 focus:ring-purple-300 transition-all outline-none"
            />
            <span className="absolute left-3 top-3.5 opacity-40">🔍</span>
          </div>
          
          <button 
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="bg-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg font-bold transition-all active:scale-95"
          >
            {sortOrder === "asc" ? "🔢 Oldest First" : "🔢 Newest First"}
          </button>
        </div>

        {/* 🔹 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <StatCard title="Total Enrollment" value={students.length} color="from-blue-600 to-blue-400" />
          <StatCard title="Results Found" value={filteredStudents.length} color="from-emerald-600 to-teal-400" />
          <StatCard title="Active Courses" value="4" color="from-violet-600 to-purple-400" />
        </div>

        {/* 🔹 Table Container */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-5">ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Age</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((s) => (
                <tr key={s.id} className="hover:bg-white/50 transition-colors group">
                  <td className="p-5 font-bold text-blue-600">#{s.id}</td>
                  <td className="font-semibold">{s.name}</td>
                  <td>
                    <Badge course={s.course} />
                  </td>
                  <td className="text-gray-600">{s.age} yrs</td>
                  <td className="text-center">
                    <button 
                      onClick={() => deleteStudent(s.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 font-bold transition-all px-4 py-1"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className="p-20 text-center">
              <p className="text-5xl mb-4">🕵️‍♂️</p>
              <p className="text-gray-400 text-lg">No students match your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* 🔥 🔹 Footer Watermark */}
      <footer className="text-center mt-12 py-4">
        <p className="text-sm font-semibold text-gray-600 tracking-wider">
          Designed by <span className="text-purple-700 font-bold">@Mohanapiriyan OMS</span>
        </p>
      </footer>
    </div>
  );
};

// --- Sub-components ---
const StatCard = ({ title, value, color }) => (
  <div className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl text-white transform hover:-translate-y-1 transition-transform`}>
    <h3 className="text-sm uppercase tracking-wider opacity-80">{title}</h3>
    <p className="text-4xl font-black mt-1">{value}</p>
  </div>
);

const Badge = ({ course }) => {
  const colors = {
    IT: "bg-blue-500",
    CS: "bg-emerald-500",
    SE: "bg-amber-500",
    AI: "bg-fuchsia-500",
  };
  return (
    <span className={`${colors[course]} px-4 py-1 rounded-lg text-white text-xs font-bold shadow-sm`}>
      {course}
    </span>
  );
};

export default Listmanagement;