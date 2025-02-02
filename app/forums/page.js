import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
];

function Page() {
  if (!topics || topics.length === 0) return <p className="text-center text-gray-600">No topics available.</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Discussion Forums</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          topic && topic.slug && topic.text && topic.img && topic.desc ? (
            <div
              key={topic.slug}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <Image src={topic.img} width={50} height={50} alt={topic.text} className="mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{topic.text}</h2>
              <p className="text-gray-600 text-sm mb-4">{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
                <Button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Discuss Now
                </Button>
              </Link>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default Page;
