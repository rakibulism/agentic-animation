'use client';

import AgentReasoningAnimation from '@/components/agent-reasoning-animation';

export default function Home() {
  const sampleTasks = [
    { id: '1', label: 'Completed', status: 'completed' as const },
    { id: '2', label: 'Current task', status: 'current' as const },
    { id: '3', label: 'In queue', status: 'queued' as const },
    { id: '4', label: 'In queue', status: 'queued' as const },
    { id: '5', label: 'In queue', status: 'queued' as const },
    { id: '6', label: 'In queue', status: 'queued' as const },
    { id: '7', label: 'In queue', status: 'hidden' as const },
    { id: '8', label: 'In queue', status: 'hidden' as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Agent Reasoning Animation
          </h1>
          <p className="text-gray-600">
            A smooth, expandable component showing task progress with animations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12">
          <AgentReasoningAnimation
            title="Worked with 3 files"
            completedCount={1}
            totalCount={9}
            tasks={sampleTasks}
          />
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Smooth expand/collapse animation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Spinning loader for current task</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Staggered task list animations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Bouncing dots loading indicator</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Responsive design with Tailwind CSS</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Fully customizable props</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
