import { useState } from "react";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: "Exam Schedule Released",
            message: "Final exam timetable has been published.",
            date: "2026-03-20",
            important: true,
        },
        {
            id: 2,
            title: "School Holiday",
            message: "School will be closed on Friday.",
            date: "2026-03-18",
            important: false,
        },
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const addAnnouncement = () => {
        if (!newTitle || !newMessage) return;

        const newItem = {
            id: Date.now(),
            title: newTitle,
            message: newMessage,
            date: new Date().toISOString().split("T")[0],
            important: false,
        };

        setAnnouncements([newItem, ...announcements]);
        setNewTitle("");
        setNewMessage("");
    };

    const deleteAnnouncement = (id) => {
        setAnnouncements(announcements.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-200 to-red-300 p-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center mb-8 text-red-800">
                    📢 Announcements Board
                </h1>

                {/* Add Form */}
                <div className="bg-white p-6 rounded-2xl shadow-md mb-8 border border-red-200">

                    <h2 className="text-xl font-semibold mb-4 text-red-700">
                        ➕ Create Announcement
                    </h2>

                    <input
                        type="text"
                        placeholder="Title..."
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full mb-3 p-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />

                    <textarea
                        placeholder="Message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full mb-3 p-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />

                    <button
                        onClick={addAnnouncement}
                        className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                    >
                        🚀 Publish
                    </button>
                </div>

                {/* Announcement List */}
                <div className="grid gap-5">
                    {announcements.map((item) => (
                        <div
                            key={item.id}
                            className={`p-5 rounded-xl shadow-sm transition hover:shadow-md ${
                                item.important
                                    ? "bg-red-100 border border-red-400"
                                    : "bg-white border border-red-100"
                            }`}
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold text-red-900">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-3">
                                    {item.important && (
                                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                            ⭐ Important
                                        </span>
                                    )}

                                    <span className="text-sm text-gray-500">
                                        {item.date}
                                    </span>

                                    <button
                                        onClick={() => deleteAnnouncement(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>

                            {/* Message */}
                            <p className="text-gray-700">
                                {item.message}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}