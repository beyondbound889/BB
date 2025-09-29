import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Chat = () => {
  return (
    <a
  href="https://wa.me/916396190643"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
  aria-label="Chat with Founder on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-white mt-3 ml-3"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <FaWhatsapp />
  </svg>
</a>
  );
};

export default Chat;
