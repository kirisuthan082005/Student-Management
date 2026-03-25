
import React from "react";

const PaymentDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-indigo-600 p-6 text-white">
          <h2 className="text-3xl font-bold">Student Payment Details</h2>
          <p className="text-sm opacity-90">Manage Student Fee Details Easily</p>
        </div>

        <div className="p-6">

          {/* Student Info */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Student Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-500 text-sm">Student Name</label>
                <input
                  type="text"
                  defaultValue="K.Linthuya"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-sm">Student ID</label>
                <input
                  type="text"
                  defaultValue="STU123"
                  className="w-full mt-1 p-3 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Fee Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">Total Fee</p>
              <h3 className="text-2xl font-bold text-blue-600">Rs. 50,000</h3>
            </div>

            <div className="bg-green-50 p-5 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">Paid Amount</p>
              <h3 className="text-2xl font-bold text-green-600">Rs. 30,000</h3>
            </div>

            {/* Stronger Red Balance Card */}
            <div className="bg-red-100 p-5 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">Balance</p>
              <h3 className="text-2xl font-bold text-red-700">Rs. 20,000</h3>
            </div>

          </div>

          {/* Payment History */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Payment History
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 text-sm uppercase">
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Method</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="p-3">2026-03-01</td>
                    <td className="p-3 font-medium">Rs. 20,000</td>
                    <td className="p-3">Cash</td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="p-3">2026-03-10</td>
                    <td className="p-3 font-medium">Rs. 10,000</td>
                    <td className="p-3">Card</td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Payment Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-gradient-to-r from-red-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition">
              + Add Payment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;