'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';

interface Task {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'queued' | 'hidden';
}

interface AgentReasoningAnimationProps {
  title: string;
  completedCount: number;
  totalCount: number;
  tasks: Task[];
  onTasksChange?: (tasks: Task[]) => void;
  autoProgress?: boolean;
}

export default function AgentReasoningAnimation({
  title = 'Worked with 3 files',
  completedCount = 1,
  totalCount = 9,
  tasks = [
    { id: '1', label: 'Completed', status: 'completed' },
    { id: '2', label: 'Current task', status: 'current' },
    { id: '3', label: 'In queue', status: 'queued' },
    { id: '4', label: 'In queue', status: 'queued' },
    { id: '5', label: 'In queue', status: 'queued' },
    { id: '6', label: 'In queue', status: 'queued' },
    { id: '7', label: 'In queue', status: 'hidden' },
    { id: '8', label: 'In queue', status: 'hidden' },
  ],
  onTasksChange,
  autoProgress = false,
}: AgentReasoningAnimationProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [displayedTasks, setDisplayedTasks] = useState(tasks);

  useEffect(() => {
    setDisplayedTasks(tasks);
  }, [tasks]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 mb-4 text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors"
        whileHover={{ gap: '0.875rem' }}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronRight size={24} />
        </motion.div>
      </motion.button>

      {/* Expandable Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            {/* Card Header */}
            <motion.div
              className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50"
              layout
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-gray-600"
                  >
                    <path d="M10 2V5M10 15V18M18 10H15M5 10H2M15.66 4.34L13.83 6.17M6.17 13.83L4.34 15.66M15.66 15.66L13.83 13.83M6.17 6.17L4.34 4.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
                <div>
                  <span className="font-medium text-gray-800">{title}</span>
                  <span className="text-gray-500 text-sm ml-2">
                    • {completedCount} of {totalCount} complete
                  </span>
                </div>
              </div>
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Tasks List */}
            <motion.div className="p-6 space-y-3">
              <AnimatePresence mode="popLayout">
                {displayedTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: task.status === 'hidden' ? 0.3 : 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    className={`flex items-center gap-4 py-2 px-3 rounded-lg transition-colors ${
                      task.status === 'completed'
                        ? 'bg-green-50'
                        : task.status === 'current'
                          ? 'bg-blue-50'
                          : task.status === 'hidden'
                            ? 'opacity-30'
                            : ''
                    }`}
                  >
                    {/* Status Icon */}
                    <motion.div layout className="flex-shrink-0">
                      {task.status === 'completed' ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                          }}
                        >
                          <CheckCircle2 size={24} className="text-green-500" />
                        </motion.div>
                      ) : task.status === 'current' ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        >
                          <Loader2 size={24} className="text-blue-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
                          whileHover={{ borderColor: '#9CA3AF' }}
                        />
                      )}
                    </motion.div>

                    {/* Label */}
                    <motion.span
                      layout
                      className={`text-base ${
                        task.status === 'completed'
                          ? 'text-gray-700 font-medium'
                          : task.status === 'current'
                            ? 'text-gray-700 font-medium'
                            : 'text-gray-500'
                      }`}
                    >
                      {task.label}
                    </motion.span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading Indicator */}
              <motion.div
                className="flex justify-center pt-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex gap-2">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-gray-400"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 0.8,
                        delay: dot * 0.15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.button
        className="flex items-center gap-2 mt-6 text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors"
        whileHover={{ gap: '0.625rem' }}
      >
        <span>Reasoning</span>
        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronRight size={24} />
        </motion.div>
      </motion.button>
    </div>
  );
}
