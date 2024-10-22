'use client';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className=" whitespace-pre-wrap z-20">
          <div className='my-3 bg-gray-500 rounded-2xl p-2'>{m.role === 'user' ? 'User: ' : 'AI: '}</div>
         <div className=' text-white text-center p-2  bg-gray-900 rounded-2xl h-auto'>
           {m.content}
         </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className='z-20'>
        <input
          className="fixed text-black text-center font-poppins border-none focus:ring-0 bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}