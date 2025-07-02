// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { chatFlow } from './chatFlow';

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
        option.nextStepId?.startsWith("module-") || // Module selections directly show topics
        option.nextStepId?.startsWith("topic-") // Topic selections directly show scenarios
      );

      if (shouldShowOptionsImmediately) {
        if (originalBotReply) {
          newMessages.push({ type: 'bot', ...originalBotReply });
        }
      } else {
        // In all other cases, show the "Click to continue" button.
        newMessages.push({
          type: 'bot',
          message: 'Click to continue',
          options: [{
            label: 'Continue',
            _continueData: {
              nextStepId: option.nextStepId, // Pass nextStepId to handleContinueClick
              triggerAction: option.triggerAction
            }
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg flex flex-col h-[80vh]">
        <div className="bg-blue-600 text-white text-lg font-semibold p-4 rounded-t-lg flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <span>ChatBot LMS</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-xl max-w-xs text-sm ${
                msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}>
                {msg.message}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-xl max-w-xs text-sm bg-gray-200 text-gray-800 animate-pulse">Typing...</div>
            </div>
          )}

          {(() => {
            const last = messages[messages.length - 1];
            // Check if the last message is a "Click to continue" prompt
            if (last?.options && last.options[0]?._continueData && !loading) {
              const continueOption = last.options[0];
              return (
                <div className={`grid grid-cols-1 gap-2`}>
                  <button
                    key={'continue-btn'}
                    onClick={() => handleContinueClick(continueOption)}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-left ml-5 mr-5"
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    {continueOption.label}
                  </button>
                </div>
              );
            } else if (last?.options && !loading) {
              // Regular options, only show if not a continue prompt
              return (
                <div className={`grid grid-cols-2 gap-2`}>
                  {last.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-left ml-5 mr-5"
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              );
            }
            return null;
          })()}
        </div>
        <div className="p-2 border-t text-xs text-gray-400 text-center">LMS powered chatbot • No input required</div>
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
