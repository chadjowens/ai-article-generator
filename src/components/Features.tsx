import { FileText, Zap, RefreshCw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-red-500" />,
      title: 'URL Processing',
      description: 'Generate articles from existing web content'
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Idea Generation',
      description: 'Transform your ideas into full-fledged articles'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-red-500" />,
      title: 'Quick Processing',
      description: 'Get your articles generated in seconds'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-red-950/10 border border-red-900/20 
                   hover:bg-red-950/20 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            {feature.icon}
            <h3 className="text-lg font-semibold text-red-200">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}