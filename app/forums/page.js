import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const topics = [
  {
    text: "MongoDB",
    img: "/mongodb.png",
    desc: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format.",
    slug: "mongodb",
  },
  {
    text: "Express.js",
    img: "/express.png",
    desc: "Express.js is a fast and minimalist web framework for Node.js with powerful routing and middleware features.",
    slug: "express",
  },
  {
    text: "React.js",
    img: "/react.png",
    desc: "React.js is a popular JavaScript library for building interactive and dynamic user interfaces.",
    slug: "react",
  },
  {
    text: "Node.js",
    img: "/node.png",
    desc: "Node.js is a JavaScript runtime that enables efficient server-side applications with non-blocking architecture.",
    slug: "node",
  },
  {
    text: "Full-Stack Development",
    img: "/fullstack.png",
    desc: "Full-Stack Development with the MERN stack covers frontend, backend, and database integration.",
    slug: "fullstack",
  },
  {
    text: "RESTful APIs",
    img: "/restapi.png",
    desc: "RESTful APIs enable seamless communication between the frontend and backend in a MERN stack application.",
    slug: "restapi",
  },
  {
    text: "Authentication",
    img: "/auth.png",
    desc: "Secure authentication in the MERN stack involves JWT, OAuth, and session management.",
    slug: "auth",
  },
]

function Page() {
  if (!topics || topics.length === 0) return <p className="text-center text-gray-400">No topics available.</p>

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-20 mt-5">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Discussion Forums
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our MERN stack topics and join the conversation. Learn, share, and grow with our community.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) =>
            topic && topic.slug && topic.text && topic.img && topic.desc ? (
              <div
                key={topic.slug}
                className="bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-6 p-4">
                  <Image
                    src={topic.img || "/placeholder.svg"}
                    width={60}
                    height={60}
                    alt={topic.text}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">{topic.text}</h2>
                <p className="text-gray-400 mb-8 flex-grow">{topic.desc}</p>
                <Link href={`/forum/${topic.slug}`}>
                  <Button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-full hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                    Join Discussion
                  </Button>
                </Link>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  )
}

export default Page

