/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Timer, 
  Target, 
  BookOpen,
  Play,
  Download,
  FileText,
  RefreshCw
} from 'lucide-react';
import { questions, type Question } from './questions';
import { jsPDF } from 'jspdf';

// Shuffles an array in place
function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Capitalizes the first letter of a string, but preserves acronyms
function capitalizeFirstWord(str: string): string {
  if (!str) return '';
  // If the string is already all uppercase and has more than 1 character, assume it's an acronym and keep it capitalized
  if (str.length > 1 && str === str.toUpperCase() && /[A-Z]/.test(str)) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

interface QuizState {
  userName: string;
  userEmail: string;
  isRegistered: boolean;
  currentQuestionIndex: number;
  score: number;
  selectedQuestions: Question[];
  userAnswers: (string | null)[];
  isFinished: boolean;
  isStarted: boolean;
  startTime: number | null;
  endTime: number | null;
}

export default function App() {
  const [state, setState] = useState<QuizState>({
    userName: '',
    userEmail: '',
    isRegistered: false,
    currentQuestionIndex: 0,
    score: 0,
    selectedQuestions: [],
    userAnswers: [],
    isFinished: false,
    isStarted: false,
    startTime: null,
    endTime: null,
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update current time every second for the live timer
  useEffect(() => {
    if (!state.isStarted || state.isFinished) return;
    
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [state.isStarted, state.isFinished]);

  // Sync currentTime when quiz starts
  useEffect(() => {
    if (state.isStarted && !state.isFinished) {
      setCurrentTime(Date.now());
    }
  }, [state.isStarted, state.isFinished]);

  // Initialize randomized quiz
  const startQuiz = () => {
    if (!state.userName || !state.userEmail) return;

    const shuffledQuestions = shuffle(questions).slice(0, 50);
    const questionsWithShuffledOptions = shuffledQuestions.map(q => ({
      ...q,
      options: shuffle(q.options)
    }));

    setState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      score: 0,
      selectedQuestions: questionsWithShuffledOptions,
      userAnswers: new Array(50).fill(null),
      isStarted: true,
      isFinished: false,
      startTime: Date.now(),
      endTime: null,
    }));
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (state.userName && state.userEmail) {
      setState(prev => ({ ...prev, isRegistered: true }));
    }
  };

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const submitAnswer = () => {
    if (!selectedOption || isAnswered) return;

    const currentQuestion = state.selectedQuestions[state.currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    setIsAnswered(true);
    
    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      userAnswers: prev.userAnswers.map((ans, i) => i === prev.currentQuestionIndex ? selectedOption : ans),
    }));
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < state.selectedQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setState(prev => ({
        ...prev,
        isFinished: true,
        endTime: Date.now(),
      }));
    }
  };

  const generateResponsePDF = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text('Response Summary - Lean Six Sigma Yellow Belt Quiz', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`Participant: ${state.userName}`, 20, 40);
    doc.text(`Email: ${state.userEmail}`, 20, 50);
    doc.text(`Score: ${state.score} / ${state.selectedQuestions.length} (${((state.score / state.selectedQuestions.length) * 100).toFixed(1)}%)`, 20, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);

    let yPos = 90;
    
    state.selectedQuestions.forEach((q, i) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59); // slate-800
      doc.setFont('helvetica', 'bold');
      const lines = doc.splitTextToSize(`${i + 1}. ${q.question}`, pageWidth - 40);
      doc.text(lines, 20, yPos);
      yPos += (lines.length * 5) + 2;
      
      const userAnswer = state.userAnswers[i];
      const isCorrect = userAnswer === q.correctAnswer;
      
      doc.setFont('helvetica', 'normal');
      if (isCorrect) {
        doc.setTextColor(34, 197, 94); // green-500
      } else {
        doc.setTextColor(239, 68, 68); // red-500
      }
      doc.text(`Your Answer: ${userAnswer ? capitalizeFirstWord(userAnswer) : 'No Answer'}`, 25, yPos);
      yPos += 5;
      
      if (!isCorrect) {
        doc.setTextColor(100, 116, 139); // slate-500
        doc.text(`Correct Answer: ${capitalizeFirstWord(q.correctAnswer)}`, 25, yPos);
        yPos += 5;
      }
      
      yPos += 5;
    });

    doc.save(`${state.userName}_response_summary.pdf`);
  };

  const currentQuestion = state.selectedQuestions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / state.selectedQuestions.length) * 100;
  
  const timeSpent = useMemo(() => {
    if (!state.startTime || !state.endTime) return 0;
    return Math.floor((state.endTime - state.startTime) / 1000);
  }, [state.startTime, state.endTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Registration View
  if (!state.isRegistered) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-xl shadow-xl border-t-4 border-yellow-400 p-6 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8 text-center justify-center">
            <div>
              <h1 className="text-lg sm:text-xl font-bold uppercase tracking-tight">Lean Six Sigma Yellow Belt Post-Training Quiz</h1>
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="Enter your name"
                value={state.userName}
                onChange={(e) => setState(prev => ({ ...prev, userName: e.target.value }))}
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-4 font-medium transition-colors focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Company email address</label>
              <input 
                type="email" 
                required
                placeholder="name@company.com"
                value={state.userEmail}
                onChange={(e) => setState(prev => ({ ...prev, userEmail: e.target.value }))}
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-4 font-medium transition-colors focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-yellow-400 font-bold py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              Continue to Instructions
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Instructions View
  if (!state.isStarted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-xl shadow-xl border-t-4 border-yellow-400 overflow-hidden"
        >
          <div className="p-6 sm:p-10">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight uppercase">Ready, <span className="text-yellow-600">{state.userName.split(' ')[0]}</span>?</h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Welcome to the Lean Six Sigma Yellow Belt Post-Training Quiz. Before you begin, please review the rules:
              </p>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                <div className="flex items-center gap-3 sm:block">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 mb-0 sm:mb-3" />
                  <div className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-400">Questions</div>
                </div>
                <div className="text-xl sm:text-2xl font-mono">50</div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                <div className="flex items-center gap-3 sm:block">
                  <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 mb-0 sm:mb-3" />
                  <div className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-400">Time Limit</div>
                </div>
                <div className="text-xl sm:text-2xl font-mono">None</div>
              </div>
            </div>

            <div className="space-y-4 mb-10 text-sm text-slate-600 bg-yellow-50 p-6 rounded-xl border border-yellow-100 italic">
              <p>• Passing score is 80% (40 correct answers).</p>
              <p>• Upon achieving the required passing score, you are required to download the PDF of your response summary.</p>
              <p className="text-red-600 font-bold">• Your progress will NOT be saved. If you refresh the page or quit the browser, you will have to restart the quiz from the beginning.</p>
            </div>

            <button 
              id="start-btn"
              onClick={startQuiz}
              className="w-full bg-slate-900 text-yellow-400 font-bold py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors shadow-xl"
            >
              Start Quiz Now
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Result View
  if (state.isFinished) {
    const percentage = (state.score / state.selectedQuestions.length) * 100;
    const isPass = percentage >= 80;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border-4 ${!isPass ? 'border-yellow-500' : 'border-slate-900'}`}
        >
          <div className={`p-8 sm:p-12 text-center ${isPass ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
            {isPass ? <Trophy className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6" /> : <RefreshCw className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6" />}
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-2">
              {isPass ? 'Quiz Result' : 'Quiz Failed'}
            </h2>
            <p className="font-mono text-lg sm:text-xl opacity-90">{state.userName}</p>
          </div>
 
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className={`p-4 sm:p-6 rounded-xl border-2 flex flex-col items-center border-slate-100 bg-slate-50`}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Final Score</span>
                <span className={`text-3xl sm:text-4xl font-mono font-black text-slate-900`}>{state.score}<span className="text-slate-300 text-xl sm:text-2xl italic">/50</span></span>
              </div>
              <div className={`p-4 sm:p-6 rounded-xl border-2 flex flex-col items-center border-slate-100 bg-slate-50`}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">percentage</span>
                <span className={`text-3xl sm:text-4xl font-mono font-black text-slate-900`}>{percentage.toFixed(1)}%</span>
              </div>
            </div>
 
            <div className="mb-10 text-center">
              <div className={`inline-block px-6 sm:px-10 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-[0.2em] ${
                isPass ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {isPass ? 'congratulations, you passed!' : 'RETAKE RECOMMENDED'}
              </div>
            </div>
 
            {isPass ? (
              <div className="mb-8">
                <p className="text-slate-600 text-sm mb-4 text-center font-bold">
                  Important: Please download your response summary below as proof of your results.
                </p>
                <button 
                  onClick={generateResponsePDF}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-900 text-slate-900 font-bold py-4 rounded-xl uppercase tracking-widest text-[10px] sm:text-xs hover:bg-slate-50 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  download response summary (PDF)
                </button>
              </div>
            ) : (
              <div className="mb-8 p-6 bg-slate-50 rounded-xl border-2 border-slate-100 text-center italic text-slate-500 text-sm">
                Review the concepts and try again. You must achieve at least 80% to pass.
              </div>
            )}

            {!isPass && (
              <button 
                id="retry-btn"
                onClick={() => setState(prev => ({ 
                  ...prev, 
                  isStarted: false, 
                  isFinished: false,
                }))}
                className="w-full font-bold py-5 rounded-xl uppercase tracking-widest text-xs transition-transform hover:scale-[1.02] flex items-center justify-center gap-3 bg-yellow-400 text-slate-900 border-2 border-slate-900 hover:bg-yellow-500 shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again Now
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz Interface (Geometric Balance)
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <div className="text-red-600 text-[10px] sm:text-xs font-bold py-2 px-4 text-center uppercase tracking-widest shrink-0 z-[60]">
        Reminder: Progress is not saved. Refreshing will restart the quiz.
      </div>
      {/* Header */}
      <header className="h-auto sm:h-20 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-4 sm:py-0 border-b-4 border-yellow-400 shrink-0 gap-4 sm:gap-0">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div>
            <h1 className="text-sm sm:text-lg font-bold tracking-tight uppercase leading-none">Lean Six Sigma Yellow Belt Quiz</h1>
          </div>
        </div>
 
        <div className="flex items-center sm:gap-12 w-full sm:w-auto justify-between sm:justify-end border-t border-slate-800 pt-3 sm:border-0 sm:pt-0">
          <div className="text-left sm:text-right">
            <span className="block text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest">Time Elapsed</span>
            <span className="text-lg sm:text-2xl font-mono text-yellow-400 tabular-nums">
              {formatTime(Math.floor((currentTime - (state.startTime || 0)) / 1000))}
            </span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-700"></div>
          <div className="text-right">
            <span className="block text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest">Progress</span>
            <span className="text-lg sm:text-2xl font-mono tabular-nums">
              {state.currentQuestionIndex + 1} <span className="text-slate-500 text-sm sm:text-lg">/ 50</span>
            </span>
          </div>
        </div>
      </header>
 
      {/* Main Container */}
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-hidden overflow-y-auto lg:overflow-hidden">
        {/* Sidebar - Collapsible on Mobile */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white p-4 sm:p-8 flex flex-col shrink-0">
          <div className="mb-0 lg:mb-8">
            <div className="flex items-center justify-between lg:block">
              <h3 className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 lg:mb-6">progress</h3>
              <div className="lg:hidden text-[10px] font-bold text-yellow-600">
                Question {state.currentQuestionIndex + 1} of 50
              </div>
            </div>
            
            {/* Desktop Progress Dots */}
            <div className="hidden lg:grid grid-cols-5 gap-2">
              {state.userAnswers.map((answer, i) => {
                const isCurrent = state.currentQuestionIndex === i;
                const isAnswered = answer !== null;
                
                return (
                  <div 
                    key={i}
                    className={`
                      w-10 h-10 rounded border-2 text-[10px] flex items-center justify-center font-bold transition-all
                      ${isCurrent ? 'border-yellow-400 bg-yellow-50 text-yellow-700 scale-110 shadow-sm' : 
                        isAnswered ? 'border-slate-900 bg-slate-900 text-white' : 
                        'border-slate-100 bg-white text-slate-300'}
                    `}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                );
              })}
            </div>

            {/* Mobile Progress Bar */}
            <div className="lg:hidden w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-yellow-400 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
 
          <div className="hidden lg:flex mt-auto border-t border-slate-100 pt-6 flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">score</span>
              <span className="text-[10px] font-mono font-bold text-slate-900">
                {state.score} / {state.currentQuestionIndex}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">percentage</span>
              <span className="text-[10px] font-mono font-bold text-green-600">
                {state.currentQuestionIndex > 0 ? ((state.score / state.currentQuestionIndex) * 100).toFixed(1) : '100.0'}%
              </span>
            </div>
          </div>
        </aside>
 
        {/* Content */}
        <div className="lg:col-span-9 p-6 sm:p-10 lg:p-16 flex flex-col bg-slate-50 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-6 lg:mb-10 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                  {currentQuestion.question}
                </h2>
              </div>
 
              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-12">
                {currentQuestion.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selectedOption === option;
                  const isCorrect = isAnswered && option === currentQuestion.correctAnswer;
                  const isIncorrect = isAnswered && isSelected && option !== currentQuestion.correctAnswer;
 
                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleOptionClick(option)}
                      className={`
                        min-h-[80px] sm:min-h-[120px] rounded-xl p-4 sm:p-6 text-left flex items-start gap-4 sm:gap-5 transition-all text-base sm:text-lg
                        border-2 bg-white group relative
                        ${isSelected ? 'border-yellow-500 shadow-lg shadow-yellow-100 scale-[1.01] sm:scale-[1.02] z-10' : 'border-slate-200 hover:border-slate-400'}
                        ${isCorrect ? 'border-green-500 bg-green-50 !shadow-green-100' : ''}
                        ${isIncorrect ? 'border-red-500 bg-red-50 !shadow-red-100' : ''}
                      `}
                    >
                      <div className={`
                        w-8 h-8 sm:w-10 sm:h-10 rounded shadow-sm border flex items-center justify-center font-black shrink-0 text-sm sm:text-base
                        ${isCorrect ? 'bg-green-500 text-white border-green-600' : 
                          isIncorrect ? 'bg-red-500 text-white border-red-600' :
                          isSelected ? 'bg-yellow-500 text-white border-yellow-600' : 
                          'bg-slate-100 text-slate-400 border-slate-200 group-hover:bg-slate-200'}
                      `}>
                        {letter}
                      </div>
                      <span className={`pt-0.5 sm:pt-1 font-bold ${isAnswered && !isCorrect && !isSelected ? 'text-slate-300' : 'text-slate-700'}`}>
                        {capitalizeFirstWord(option)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-xl border-2 mb-8 ${
                    selectedOption === currentQuestion.correctAnswer 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="font-black uppercase tracking-widest text-xs">
                      {selectedOption === currentQuestion.correctAnswer ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold">
                    {currentQuestion.explanation || `The correct answer is "${currentQuestion.correctAnswer}".`}
                  </p>
                </motion.div>
              )}
 
              {/* Navigation Footer */}
              <div className="mt-auto flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-6 lg:pt-8 gap-4 sm:gap-0">
                <div className="hidden sm:flex lg:hidden gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score:</span>
                    <span className="text-sm font-mono font-bold text-slate-900">{state.score}</span>
                  </div>
                </div>
                
                <div className="flex w-full sm:w-auto gap-4">
                  {!isAnswered ? (
                    <button
                      id="submit-btn"
                      onClick={submitAnswer}
                      disabled={!selectedOption}
                      className={`
                        flex-1 sm:flex-none px-8 lg:px-12 py-4 rounded-lg font-black uppercase text-[10px] sm:text-xs tracking-widest shadow-xl transition-all
                        ${selectedOption 
                          ? 'bg-slate-900 text-yellow-400 hover:bg-slate-800 active:scale-95' 
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}
                      `}
                    >
                      submit answer
                    </button>
                  ) : (
                    <button
                      id="next-btn"
                      onClick={nextQuestion}
                      className="flex-1 sm:flex-none bg-yellow-400 text-slate-900 px-8 lg:px-12 py-4 rounded-lg font-black uppercase text-[10px] sm:text-xs tracking-widest shadow-xl shadow-yellow-200 hover:bg-yellow-500 transition-all active:scale-95 flex items-center justify-center sm:justify-start gap-3"
                    >
                      {state.currentQuestionIndex === state.selectedQuestions.length - 1 ? 'Finalize Score' : 'Next Question'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
