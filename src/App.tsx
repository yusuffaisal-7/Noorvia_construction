import React, { useState, useEffect } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import LoadingScreen from './components/LoadingScreen';
import ConstructionAnimation from './components/ConstructionAnimation';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Description from './components/Description';
import SubscriptionForm from './components/SubscriptionForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Preload any resources here if needed
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000); // Fallback to prevent infinite loading

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundAnimation />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header Section */}
          <Header />
          
          {/* Construction Animation */}
          <ConstructionAnimation />
          
          {/* Countdown Timer */}
          <Countdown />
          
          {/* Description */}
          <Description />
          
          {/* Email Subscription */}
          <SubscriptionForm />
          
          {/* Social Links */}
          <SocialLinks />
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
    </div>
  );
}

export default App;