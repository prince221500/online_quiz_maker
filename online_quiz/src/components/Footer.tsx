import React from 'react';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Code Quiz</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Enhance your programming skills with our comprehensive quiz platform. 
              Join thousands of developers improving their coding knowledge daily.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Quizzes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Leaderboard</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Code Quiz. All rights reserved. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;