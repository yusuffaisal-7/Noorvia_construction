import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Store email in localStorage
      const subscribers = JSON.parse(localStorage.getItem('noorvia-subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('noorvia-subscribers', JSON.stringify(subscribers));
      }
      
      setStatus('success');
      setMessage('Thank you! We\'ll notify you when we launch.');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mb-12 animate-slide-up" style={{animationDelay: '1.5s'}}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-blue-300" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
            disabled={status === 'loading'}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-blue-800 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : status === 'success' ? (
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Subscribed!
            </div>
          ) : (
            'Notify Me When We Launch'
          )}
        </button>
        
        {message && (
          <div className={`flex items-center justify-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-300' : 'text-red-300'
          } animate-fade-in`}>
            {status === 'success' ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default SubscriptionForm;