'use client';

import { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatPopup from './ChatPopup';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatBubble onClick={toggleChat} isOpen={isOpen} />
      <ChatPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
