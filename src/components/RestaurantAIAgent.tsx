import React, { useState } from 'react';
import clsx from 'clsx';
import { useLanguage } from '../i18n/LanguageContext';
import { agentCopy, agentPrompts } from '../data/restaurant';

type ChatMessage = { from: 'agent' | 'user'; text: string };

export const RestaurantAIAgent: React.FC = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ from: 'agent', text: agentCopy.greeting[language] }]);

  const reply = (userText: string) => {
    const lower = userText.toLowerCase();
    const match = agentPrompts.find((p) => p.keywords.some((k) => lower.includes(k)));
    const answer = match ? match.answer[language] : agentCopy.fallback[language];
    setMessages((prev) => [...prev, { from: 'user', text: userText }, { from: 'agent', text: answer }]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    reply(trimmed);
    setInput('');
  };

  const handlePrompt = (promptId: string) => {
    const prompt = agentPrompts.find((p) => p.id === promptId);
    if (!prompt) return;
    reply(prompt.question[language]);
  };

  return (
    <div className={clsx('rest-agent', { 'rest-agent--open': open })}>
      {open && (
        <div className="rest-agent-panel">
          <div className="rest-agent-messages">
            {messages.map((m, i) => (
              <div key={i} className={clsx('rest-agent-message', `rest-agent-message--${m.from}`)}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="rest-agent-prompts">
            {agentPrompts.map((p) => (
              <button key={p.id} type="button" className="rest-agent-prompt" onClick={() => handlePrompt(p.id)}>
                {p.question[language]}
              </button>
            ))}
          </div>

          <form className="rest-agent-form" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={agentCopy.placeholder[language]}
              aria-label={agentCopy.placeholder[language]}
            />
            <button type="submit">{agentCopy.send[language]}</button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="rest-agent-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {open ? agentCopy.toggleClose[language] : agentCopy.toggleOpen[language]}
      </button>
    </div>
  );
};
