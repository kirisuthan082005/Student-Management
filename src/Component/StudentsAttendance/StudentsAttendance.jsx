
import { useState } from "react";

// Sample student data with custom images
const studentsData = [
  { id: "ST001", name: "Kavi", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "ST002", name: "Julia", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: "ST003", name: "Ravi", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: "ST004", name: "Romeo", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: "ST005", name: "Siva", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: "ST006", name: "Preethan", img: "https://randomuser.me/api/portraits/men/6.jpg" },
  { id: "ST007", name: "leenan", img: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: "ST008", name: "Roshan", img: "https://randomuser.me/api/portraits/men/8.jpg" },
  { id: "ST009", name: "Eswar", img: "https://randomuser.me/api/portraits/men/9.jpg" },
  { id: "ST010", name: "Niru", img: "https://randomuser.me/api/portraits/men/10.jpg" },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState({});
  const [search, setSearch] = useState("");

  const markAttendance = (id, status) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  const markAllPresent = () => {
    const allPresent = {};
    studentsData.forEach((s) => (allPresent[s.id] = "present"));
    setAttendance(allPresent);
  };

  const handleSubmit = () => {
    console.log(attendance);
    alert("Attendance Saved!");
  };

  const filteredStudents = studentsData.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  const presentCount = Object.values(attendance).filter((s) => s === "present").length;
  const absentCount = Object.values(attendance).filter((s) => s === "absent").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-red-50 p-5 rounded-xl shadow mb-6 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-red-800">Student Attendance</h1>
            <p className="text-red-600 text-sm">
              Class: Grade 10A | Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="border border-red-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={markAllPresent}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Mark All Present
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-100 p-4 rounded-lg shadow text-center">
            <p className="text-red-700">Total Students</p>
            <h2 className="text-2xl font-bold">{studentsData.length}</h2>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-700">Present</p>
            <h2 className="text-2xl font-bold">{presentCount}</h2>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg text-center">
            <p className="text-orange-700">Absent</p>
            <h2 className="text-2xl font-bold">{absentCount}</h2>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-4 text-left">Student Details</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-red-50">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-12 h-12 rounded-full border-2 border-red-300"
                    />
                    <div>
                      <p className="font-medium text-red-800">{student.name}</p>
                      <p className="text-sm text-red-500">{student.id}</p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => markAttendance(student.id, "present")}
                      className={`px-4 py-1 rounded-full mr-2 ${
                        attendance[student.id] === "present"
                          ? "bg-green-600 text-white shadow"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => markAttendance(student.id, "absent")}
                      className={`px-4 py-1 rounded-full ${
                        attendance[student.id] === "absent"
                          ? "bg-orange-600 text-white shadow"
                          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      }`}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit */}
        <div className="mt-6 text-right">
          <button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}