import { Message, ChatResponse } from '@/types/chat';

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || 'https://checcolino-ai.vercel.app/api/chat';

export class ChatService {
  async sendMessage(messages: Message[]): Promise<string> {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data.response;
    } catch (error) {
      console.error('Chat service error:', error);
      throw error;
    }
  }
}
