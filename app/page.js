import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-yellow-400">FlowChat</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200">
              Connect, collaborate, and chat effortlessly with a platform built for seamless communication. 
              Experience the flow of meaningful conversations!
            </p>
            <div className="space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md shadow-md">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-md shadow-md">
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="/hero-chat.png"
              alt="FlowChat Hero"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 lg:px-20 py-20 space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Why Choose FlowChat?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4H9m4 0h1m-1 4v2m-6 4h6a2 2 0 002-2v-1m4-4V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h1l2 2 3-2h3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Real-Time Messaging</h3>
            <p className="text-gray-400 mt-2">
              Chat in real-time with blazing-fast message delivery and read receipts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-600 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-1.447 1.894L15 16m-6 0l-4.553 2.276A2 2 0 012 14.382V9.618a2 2 0 011.447-1.894L9 8m6 8V8m-6 8v-4m0-4V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Multimedia Sharing</h3>
            <p className="text-gray-400 mt-2">
              Share photos, videos, and files with ease in just a few clicks.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2h-4M4 13v7a2 2 0 002 2h4m-6-4h16m-3-4a4 4 0 01-8 0m8 0a4 4 0 01-8 0"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Secure and Private</h3>
            <p className="text-gray-400 mt-2">
              End-to-end encryption to keep your conversations safe and private.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Ready to start chatting?
          </h2>
          <p className="text-gray-400 mt-4">
            Join thousands of users making their conversations seamless with FlowChat.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md shadow-md">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
