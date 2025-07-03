import React from 'react';
import { Code, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onBackToHome: () => void;
  showBackButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBackToHome, showBackButton }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <button
                onClick={onBackToHome}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Code Quiz</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              About
            </a>
            <button className="btn-primary">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;