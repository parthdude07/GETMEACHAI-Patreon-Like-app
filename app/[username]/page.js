import React from 'react'

const Username = ({params}) => {
  return (
    <>
    {params.username}
     <div className="min-h-screen bg-gray-100">
      {/* Cover Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413"
          alt="Cover"
          className="w-full h-64 object-cover"
        />
        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="mt-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Dummy supporters */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Supporters</h3>
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="flex items-center gap-4 p-3 bg-white rounded-md shadow"
              >
                <img
                  src={`https://i.pravatar.cc/40?img=${id + 10}`}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">User{id}</p>
                  <p className="text-sm text-gray-500">Donated ₹{id * 100}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: (empty or bio if needed) */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mt-4">John Creator</h2>
            <p className="text-gray-600 mt-2">
              Sharing my journey through art and creativity 🎨✨
            </p>
          </div>

          {/* Right: Support form */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold mb-2">Support John</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="3"
                placeholder="Leave a message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                placeholder="Amount (₹)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Username