import Image from "next/image"
import { ArrowRight, MessageSquare, Share2, Shield } from "lucide-react"

import pic from '../public/pic.png'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
     
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="lg:w-1/2 space-y-8 z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Welcome to <span className="text-yellow-400">FlowChat</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Connect, collaborate, and chat effortlessly with a platform built for seamless communication. Experience
              the flow of meaningful conversations!
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border-2 border-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 z-10 relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src={pic}
                alt="Device Mockup"
                width={600}
                height={400}
                className="w-full drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 lg:px-20 py-24 space-y-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Why Choose FlowChat?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-yellow-400" />}
            title="Real-Time Messaging"
            description="Chat in real-time with blazing-fast message delivery and read receipts."
          />
          <FeatureCard
            icon={<Share2 className="h-10 w-10 text-blue-400" />}
            title="Multimedia Sharing"
            description="Share photos, videos, and files with ease in just a few clicks."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-purple-400" />}
            title="Secure and Private"
            description="End-to-end encryption to keep your conversations safe and private."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to start chatting?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users making their conversations seamless with FlowChat.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center mx-auto">
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="bg-gray-700/50 p-4 rounded-full inline-block mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

