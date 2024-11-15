import Header from './components/Header';
import InputForm from './components/InputForm';
import Features from './components/Features';
import History from './components/History';
import Toast from './components/Toast';
import { NotificationProvider } from './context/NotificationContext';

export default function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <Header />
        <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Transform Content Instantly
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Generate high-quality articles from URLs or your ideas using advanced AI technology.
              Simply paste a URL or describe your concept to get started.
            </p>
          </div>
          
          <InputForm />
          
          <div className="pt-12 border-t border-red-900/20">
            <h3 className="text-2xl font-semibold text-center mb-8 text-red-100">
              Powerful Features
            </h3>
            <Features />
          </div>

          <div className="pt-12 border-t border-red-900/20 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-center mb-8 text-red-100">
              Generation History
            </h3>
            <div className="w-full flex justify-center">
              <History />
            </div>
          </div>
        </main>
        <Toast />
      </div>
    </NotificationProvider>
  );
}