import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';

export default function InputForm() {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState<'url' | 'idea'>('url');
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://hook.us1.make.com/hea1epn8k8x5owlag36c7ueo4ghy4jjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: inputType,
          content: input,
        }),
      });

      if (!response.ok) throw new Error('Failed to send data');
      
      setInput('');
      showNotification('Successfully sent to AI for processing!', 'success');
    } catch (error) {
      showNotification('Failed to process request. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="flex gap-4 p-1 bg-red-950/20 rounded-lg w-fit mx-auto">
        <button
          type="button"
          onClick={() => setInputType('url')}
          className={`px-4 py-2 rounded-md transition-all ${
            inputType === 'url'
              ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
              : 'text-red-300 hover:text-red-200'
          }`}
        >
          URL
        </button>
        <button
          type="button"
          onClick={() => setInputType('idea')}
          className={`px-4 py-2 rounded-md transition-all ${
            inputType === 'idea'
              ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
              : 'text-red-300 hover:text-red-200'
          }`}
        >
          Idea
        </button>
      </div>

      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={inputType === 'url' ? 'Enter URL to generate article from...' : 'Describe your article idea...'}
          className="w-full h-32 px-4 py-3 bg-red-950/10 border border-red-900/20 rounded-lg 
                   text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 
                   focus:ring-red-500/50 focus:border-transparent resize-none"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute bottom-4 right-4 p-2 rounded-lg bg-gradient-to-r 
                   from-red-600 to-red-500 text-white disabled:opacity-50 
                   disabled:cursor-not-allowed hover:from-red-500 hover:to-red-400 
                   transition-all duration-300"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}