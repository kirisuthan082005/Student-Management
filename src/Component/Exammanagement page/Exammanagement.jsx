import React, { useState } from 'react';
const Exammanagement = () => {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);

    const students = [
        { id: "S001", nic: "200012345678", index: "1001", name: "Kavi", marks: 85 },
        { id: "S002", nic: "200045678912", index: "1002", name: "Julia", marks: 72 },
        { id: "S003", nic: "200045678934", index: "1003", name: "Ravi", marks: 35 },
        { id: "S004", nic: "2000456743454", index: "1004", name: "Romeo", marks: 69 },
        { id: "S005", nic: "2000453243454", index: "1005", name: "Siva", marks: 89 },
        { id: "S006", nic: "2008994567454", index: "1006", name: "Preethan", marks: 58 },
        { id: "S007", nic: "2000456309454", index: "1007", name: "Leenan", marks: 37 },
        { id: "S008", nic: "2000989332323", index: "1008", name: "Roshan", marks: 90 },
        { id: "S009", nic: "20004398508508", index: "1009", name: "Eswar", marks: 21 },
        { id: "S010", nic: "20004544343656", index: "1010", name: "Niru", marks: 79 },
    ];

    const handleSearch = () => {
        const cleanQuery = query.trim();

        const found = students.find(
            (s) =>
                s.id === cleanQuery ||
                s.nic === cleanQuery ||
                s.index === cleanQuery
        );

        setResult(found || "not_found");
    };

    const getGrade = (marks) => {
        if (marks >= 75) return "A";
        if (marks >= 65) return "B";
        if (marks >= 50) return "C";
        if (marks >= 35) return "S";
        if (marks < 35) return "W";
        return "F";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 via-rose-300 to-red-400">

            {/* Glass Card */}
            <div className="backdrop-blur-lg bg-white/70 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/30">

                <h1 className="text-3xl font-extrabold text-center text-red-700 mb-6">
                    🎓 Exam Results
                </h1>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Enter ID / Index / NIC"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full p-4 rounded-xl border border-red-200 focus:outline-none focus:ring-4 focus:ring-red-300 mb-4"
                />

                {/* Button */}
                <button
                    onClick={handleSearch}
                    disabled={!query.trim()}
                    className={`w-full py-3 rounded-xl font-semibold transition ${
                        query.trim()
                            ? "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:scale-105"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    🔍 Search
                </button>

                {/* Result */}
                {result && result !== "not_found" && (
                    <div className="mt-6 p-5 rounded-xl bg-white shadow-md border border-red-200">

                        <h2 className="text-xl font-bold text-red-700 mb-3">
                            {result.name}
                        </h2>

                        <div className="space-y-2 text-gray-700">
                            <p><strong>ID:</strong> {result.id}</p>
                            <p><strong>Marks:</strong> {result.marks}</p>
                            <p><strong>Grade:</strong> {getGrade(result.marks)}</p>

                            <p>
                                <strong>Status:</strong>{" "}
                                <span className={`font-semibold ${
                                    result.marks >= 35 ? "text-green-600" : "text-red-600"
                                }`}>
                                    {result.marks >= 35 ? "Pass ✅" : "Fail ❌"}
                                </span>
                            </p>
                        </div>
                    </div>
                )}

                {/* Not Found */}
                {result === "not_found" && (
                    <div className="mt-6 p-4 rounded-xl bg-red-100 text-red-600 text-center font-semibold">
                        ❌ No Result Found
                    </div>
                )}
            </div>
        </div>
  )
}

export default Exammanagement
