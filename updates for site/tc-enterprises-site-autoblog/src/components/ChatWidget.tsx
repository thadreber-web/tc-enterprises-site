'use client';

import { useState, useEffect, useRef } from 'react';

// Define the structure for a chat message
interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the bottom of the chat log when new messages are added
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [history]);

  // Effect to load history from session storage on initial render
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('tc-chat-transcript-v2');
      const initialHistory = saved ? JSON.parse(saved) : [];
      if (initialHistory.length === 0) {
        setHistory([
          {
            role: 'bot',
            text: `Hi there! I'm Cole, the support assistant for T & C Enterprises. How can I help?`,
          },
        ]);
      }
      else {
        setHistory(initialHistory);
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
    }
  }, []);

  const exportConversation = () => {
    const conversationText = history
      .filter(msg => msg.text !== 'Thinking...') // Exclude thinking messages
      .map(msg => `${msg.role === 'user' ? 'You' : 'T&C Assistant'}: ${msg.text}`)
      .join('\n\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tc-enterprises-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearConversation = () => {
    const initialHistory = [{
      role: 'bot' as const,
      text: `Hi there! I'm Cole, the support assistant for T & C Enterprises. How can I help?`,
    }];
    setHistory(initialHistory);
    saveHistory(initialHistory);
  };

  // Function to save history to session storage
  const saveHistory = (newHistory: ChatMessage[]) => {
    try {
      sessionStorage.setItem('tc-chat-transcript-v2', JSON.stringify(newHistory));
    } catch (error) {
      console.error("Failed to save chat history:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    const thinkingMessage: ChatMessage = { role: 'bot', text: 'Thinking...' };

    // Optimistically update UI
    const newHistory = [...history, userMessage, thinkingMessage];
    setHistory(newHistory);
    setInput('');
    setStatus('Sending...');
    setIsError(false);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error('API response was not ok');
      }

      const data = await res.json();
      const botMessage: ChatMessage = { role: 'bot', text: data.reply || 'Sorry, I had trouble answering.' };
      
      // Replace 'Thinking...' with the actual response
      const finalHistory = [...history, userMessage, botMessage];
      setHistory(finalHistory);
      saveHistory(finalHistory);
      setStatus('');

    } catch (error) {
      console.error("Chat API error:", error);
      const errorMessage: ChatMessage = { role: 'bot', text: 'Sorry, a network error occurred.' };
      const finalHistory = [...history, userMessage, errorMessage];
      setHistory(finalHistory);
      saveHistory(finalHistory);
      setStatus('Network error. Please try again.');
      setIsError(true);
    }
  };

  return (
    <>
      {/* Chat Panel */}
  <div className={`fixed bottom-24 right-5 w-full max-w-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-background dark:bg-background-dark shadow-lg flex-col ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="flex items-center justify-between border-b p-3 bg-background dark:bg-background-dark">
          <h3 className="font-bold text-foreground dark:text-foreground-dark">Chat with us</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={exportConversation} 
              className="text-muted hover:text-primary text-sm px-2 py-1 rounded hover:bg-muted/10 dark:hover:bg-muted/20" 
              title="Export conversation"
              aria-label="Export conversation as text file"
            >
              💾
            </button>
            <button 
              onClick={clearConversation} 
              className="text-muted hover:text-red-500 text-sm px-2 py-1 rounded hover:bg-muted/10 dark:hover:bg-muted/20" 
              title="Clear conversation"
              aria-label="Clear conversation history"
            >
              🗑️
            </button>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-foreground dark:hover:text-foreground-dark">&times;</button>
          </div>
        </div>
        
        {/* Conversation Storage Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800 px-3 py-2">
          <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center gap-1">
            <span>🔒</span>
            Conversations stored locally in your browser session only
          </p>
        </div>
        
  <div ref={logRef} className="flex-grow overflow-y-auto p-4 space-y-4 h-96 bg-background dark:bg-background-dark custom-scrollbar">
          {history.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-xs text-white ${msg.role === 'user' ? 'bg-primary dark:bg-primary-dark' : 'bg-secondary dark:bg-secondary-dark text-foreground dark:text-foreground-dark'}`}> 
                {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
  <form onSubmit={handleSubmit} className="flex items-center border-t p-3 bg-background dark:bg-background-dark">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="form-input flex-grow rounded-full"
            aria-label="Chat message input"
          />
          <button type="submit" className="ml-3 flex-shrink-0 rounded-full bg-accent px-4 py-2 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Send message">
            Send
          </button>
        </form>
        {status && (
          <p className={`text-sm text-center p-2 ${isError ? 'text-red-500' : 'text-primary'}`} role="alert">
            {status}
          </p>
        )}
      </div>

      {/* Chat FAB (Floating Action Button) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Toggle chat widget"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>
    </>
  );
}
