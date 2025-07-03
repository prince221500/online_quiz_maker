import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

interface QuizSectionProps {
  onBackToHome: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onBackToHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, quizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(30);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You're a coding master! 🏆";
    if (percentage >= 60) return "Good job! Keep practicing! 👍";
    if (percentage >= 40) return "Not bad! Room for improvement! 📚";
    return "Keep learning! Practice makes perfect! 💪";
  };

  if (quizCompleted) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold text-white mb-6">Quiz Completed!</h2>
            <div className="text-6xl font-bold text-yellow-400 mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl text-white/90 mb-8">{getScoreMessage()}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetQuiz}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Try Again</span>
              </button>
              <button 
                onClick={onBackToHome}
                className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white/80">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <div className="flex items-center space-x-2 text-white">
              <Clock className="h-5 w-5" />
              <span className={`font-bold ${timeLeft <= 10 ? 'text-red-400' : ''}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {question.question}
          </h2>
          
          {question.code && (
            <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{question.code}</code>
              </pre>
            </div>
          )}
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`quiz-option ${
                  selectedAnswer === index ? 'selected' : ''
                } ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'correct'
                      : selectedAnswer === index
                      ? 'incorrect'
                      : 'opacity-50'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{option}</span>
                  {showResult && (
                    <div>
                      {index === question.correctAnswer && (
                        <CheckCircle className="h-6 w-6 text-success-600" />
                      )}
                      {selectedAnswer === index && index !== question.correctAnswer && (
                        <XCircle className="h-6 w-6 text-danger-600" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {showResult && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-white/90">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Next Button */}
        {!showResult && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;