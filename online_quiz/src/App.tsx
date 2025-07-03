import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuizSection from './components/QuizSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz'>('home');

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen">
      <Header onBackToHome={handleBackToHome} showBackButton={currentView === 'quiz'} />
      
      {currentView === 'home' ? (
        <>
          <Hero onStartQuiz={handleStartQuiz} />
          <Features />
          <Footer />
        </>
      ) : (
        <QuizSection onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;