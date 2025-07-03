import React from 'react';
import { Play, Trophy, Users, Clock } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Test Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Coding Skills
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Challenge yourself with our comprehensive programming quizzes. 
            From beginner to expert level, improve your coding knowledge across multiple languages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={onStartQuiz}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Start Quiz Now</span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/30">
              View Leaderboard
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-white/80">Questions Available</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
              <p className="text-white/80">Active Users</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">15</h3>
              <p className="text-white/80">Programming Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;