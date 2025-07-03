import React from 'react';
import { Code2, Brain, Award, BarChart3, Users, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Multiple Languages',
      description: 'Test your knowledge in JavaScript, Python, Java, C++, and more programming languages.',
      color: 'text-blue-500'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'Our AI adapts to your skill level, providing personalized challenges to maximize learning.',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Earn Certificates',
      description: 'Complete quizzes and earn certificates to showcase your programming expertise.',
      color: 'text-yellow-500'
    },
    {
      icon: BarChart3,
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and performance insights.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Community Challenges',
      description: 'Compete with developers worldwide in weekly coding challenges and tournaments.',
      color: 'text-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate explanations for answers to learn from your mistakes quickly.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Code Quiz?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our platform offers comprehensive features designed to enhance your coding skills 
            and accelerate your programming journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-6`} />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;