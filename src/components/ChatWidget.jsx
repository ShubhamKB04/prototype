
import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm IdentityShield's assistant. Ask me anything about our IAM solutions." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasGreeted(true);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const newMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to get response');

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>

          {/* Persistent greeting label above the icon (only when chat is closed) */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-[90] bg-card border border-borderLight text-textPrimary text-xs font-medium px-3 py-2 shadow-lg max-w-[180px] text-right">
          I'm your assistant! Ask me anything 👋
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-card border-r border-b border-borderLight rotate-45"></div>
        </div>
      )}
      {/* Floating Mascot Icon */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-[90] w-16 h-16 rounded-full bg-accent text-accent flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        {/* Pulsing glow ring — only before first interaction, to draw attention */}
        {!hasGreeted && (
          <span className="absolute inset-0 rounded-full border-2 border-accent animate-[ping_2s_ease-in-out_infinite] pointer-events-none"></span>
        )}

        {isOpen ? (
          <X className="w-7 h-7 text-black" />
        ) : (
          <img src="/mascot.svg" alt="Chat assistant" className="w-11 h-11" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[90] w-[90vw] max-w-sm h-[70vh] max-h-[500px] bg-card border border-borderLight shadow-lg flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-borderLight flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent text-accent flex items-center justify-center flex-shrink-0">
              <img src="/mascot.svg" alt="Chat assistant" className="w-7 h-7" />
            </div>
            <h3 className="text-sm font-bold text-textPrimary">IdentityShield Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-black'
                      : 'bg-bgPrimary text-textPrimary border border-borderLight'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-bgPrimary text-textSecondary border border-borderLight px-3 py-2 text-sm">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-borderLight flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 bg-bgPrimary border border-borderLight text-textPrimary text-sm focus:outline-none focus:border-accent"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-3 py-2 bg-accent text-black disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;