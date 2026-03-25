import React from "react";

const Dash = () => {
  const stats = [
    { title: "Total Students", value: 1200, color: "bg-blue-500" },
    { title: "Total Teachers", value: 75, color: "bg-green-500" },
    { title: "Total Classes", value: 32, color: "bg-purple-500" },
    { title: "Active Courses", value: 18, color: "bg-pink-500" },
  ];

  const activities = [
    { id: 1, text: "New student registered", time: "2 mins ago" },
    { id: 2, text: "Math class updated", time: "10 mins ago" },
    { id: 3, text: "New teacher added", time: "1 hour ago" },
    { id: 4, text: "Exam schedule published", time: "3 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <h2 className="text-gray-500 text-sm">{item.title}</h2>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
            <div
              className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Attendance Rate</p>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                <div className="bg-blue-500 h-3 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Course Completion</p>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                <div className="bg-green-500 h-3 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Assignments Submitted</p>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                <div className="bg-purple-500 h-3 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

          <ul className="space-y-4">
            {activities.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{activity.text}</span>
                <span className="text-sm text-gray-400">
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dash;