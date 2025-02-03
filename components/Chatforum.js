"use client";

import { useState, useEffect } from "react";

import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

import { useUser } from "@clerk/nextjs";




const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const userToken = process.env.STREAM_USER_TOKEN;


export default function Chatforum({ slug }) {
  const [user, setuser] = useState();
  const [isLoaded, clerkUser] = useEffect(() => {
    const userId = clerkUser.user?.id;
    const userName = clerkUser.user?.firstName;
    if(isLoaded){
    const user = {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?name=${userName}`,
    };
    setuser(user)
  }
  }, [isLoaded]);

  function toTitleCase(str) {
    return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  }

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: toTitleCase(slug.replace(/-/g, " ")) + "" + "Chat",
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
