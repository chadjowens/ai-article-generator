import { BrainCircuit } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 border-b border-red-900/20">
      <div className="max-w-4xl mx-auto flex items-center gap-2">
        <BrainCircuit className="w-8 h-8 text-red-500" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
          AI Article Generator
        </h1>
      </div>
    </header>
  );
}