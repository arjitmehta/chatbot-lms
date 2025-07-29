// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { chatFlow } from './chatFlow';
import 'bootstrap/dist/css/bootstrap.min.css';

function TypingIndicator() {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="bg-light rounded-pill px-3 py-2 d-inline-flex align-items-center shadow-sm">
        <span className="me-2 text-secondary">typing</span>
        <span className="typing-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      </div>
      <style>
        {`
          .typing-dots {
            display: inline-block;
            height: 10px;
            vertical-align: middle;
          }
          .typing-dots .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 1px;
            background: #6c757d;
            border-radius: 50%;
            opacity: 0.5;
            animation: typing-bounce 1s infinite alternate;
          }
          .typing-dots .dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dots .dot:nth-child(3) { animation-delay: 0.4s; }
          @keyframes typing-bounce {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-5px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialMessages = [
      { type: 'bot', message: 'Hi Alice 👋' },
      { type: 'bot', message: "Welcome back! I'm your friendly learning buddy. Whenever you're stuck or curious, I'm here to guide you!" },
      { type: 'bot', ...chatFlow[0] }
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < initialMessages.length) {
        const msg = initialMessages[index];
        setLoading(true);
        setTimeout(() => {
          setMessages(prev => [...prev, msg]);
          setLoading(false);
        }, 1500);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 0);

    return () => clearInterval(interval);
  }, []);

  const handleOptionClick = (option) => {
    const originalBotReply = option.nextStepId ? chatFlow.find(step => step.id === option.nextStepId) : null;

    setMessages(prev => [...prev, { type: 'user', message: option.label }]);
    setLoading(true);

    setTimeout(() => {
      let newMessages = [{ type: 'bot', message: option.followUp || "Great choice!" }];

      // if (originalBotReply && originalBotReply.options) {
      //   newMessages.push({ type: 'bot', ...originalBotReply });
      // } enable this to don't show the "Click to continue" button on course selection

      const shouldShowOptionsImmediately = (
        option.nextStepId === "select-course" || // "Select a Course" directly shows options
        option.nextStepId?.startsWith("confirm-") || // Module selections directly show topics
        option.nextStepId?.startsWith("sector-") || // Module selections directly show topics
        option.nextStepId?.startsWith("course-") || // Topic selections directly show scenarios
        option.nextStepId?.startsWith("module-") || // Subtopic selections directly show next options
        option.nextStepId?.startsWith("scenario-")    // Scenario selections directly show next options
      );

      if (shouldShowOptionsImmediately) {
        if (originalBotReply) {
          newMessages.push({ type: 'bot', ...originalBotReply });
        }
      } else {
        // In all other cases, show the "Click to continue" button as a link if continueUrl is present.
        newMessages.push({
          type: 'bot',
          message: 'Click to continue',
          options: [{
            label: 'Continue',
            _continueData: {
              nextStepId: option.nextStepId, // Pass nextStepId to handleContinueClick
              triggerAction: option.triggerAction
            },
            continueUrl: option.continueUrl || null
          }]
        });
      }

      setMessages(prev => [...prev, ...newMessages]);
      setLoading(false);
    }, 1500);
  };

  const handleContinueClick = (continueOption) => {
    setLoading(true);
    setTimeout(() => {
      const { nextStepId, triggerAction } = continueOption._continueData;
      let newMessages = [];

      if (triggerAction?.type === 'navigate') {
        navigate(triggerAction.payload);
      } else if (nextStepId) {
        const botReply = chatFlow.find(step => step.id === nextStepId);
        if (botReply) {
          newMessages.push({ type: 'bot', ...botReply });
        }
      }
      setMessages(prev => [...prev, ...newMessages]);
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: 420, height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <div className="card-header bg-primary text-white d-flex align-items-center">
          <Bot className="me-2" />
          <span>ChatBot LMS</span>
        </div>
        <div className="card-body flex-grow-1 overflow-auto p-3 d-flex flex-column" style={{ background: '#f8f9fa' }}>
          <div className="flex-grow-1 d-flex flex-column">
            <div>
              {messages.slice().map((msg, i) => (
                <div key={i} className={`d-flex mb-2 ${msg.type === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                  <div className={`p-2 rounded-3 shadow-sm ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-white text-dark border'}`}>
                    {msg.message}
                  </div>
                </div>
              ))}
              {loading && <TypingIndicator />}
            </div>
          </div>
          {(() => {
            const last = messages[messages.length - 1];
            if (last?.options && last.options[0]?._continueData && !loading) {
              const continueOption = last.options[0];
              const continueUrl = continueOption.continueUrl;
              if (continueUrl) {
                return (
                  <div className="d-grid gap-2 mt-3">
                    <a
                      key={'continue-link'}
                      href={continueUrl}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {continueOption.label}
                    </a>
                  </div>
                );
              }
              return (
                <div className="d-grid gap-2 mt-3">
                  <button
                    key={'continue-btn'}
                    onClick={() => handleContinueClick(continueOption)}
                    className="btn btn-outline-primary"
                  >
                    {continueOption.label}
                  </button>
                </div>
              );
            } else if (last?.options && !loading) {
              return (
                <div className="row g-2 mt-3">
                  {last.options.map((opt, idx) => (
                    <div className="col-6" key={idx}>
                      <button
                        onClick={() => handleOptionClick(opt)}
                        className="btn btn-outline-primary w-100"
                      >
                        {opt.label}
                      </button>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })()}
        </div>
        <div className="card-footer text-center text-muted small">
          LMS powered chatbot • No input required
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ChatBot />
    </Router>
  );
}

export default App;
