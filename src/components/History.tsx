import { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

export default function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-[80vw] max-w-5xl -mx-[10vw] h-[533px] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-red-900/20 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-950/50 backdrop-blur-sm">
          <AlertCircle className="w-8 h-8 text-red-500" />
          <div className="text-center px-4">
            <p className="text-red-200 font-medium">Unable to load history view</p>
            <p className="text-sm text-gray-400 mt-2">
              Please verify the Airtable base is publicly accessible
            </p>
          </div>
        </div>
      )}

      <iframe
        className="airtable-embed w-full h-full"
        src="https://airtable.com/embed/appF1ctRriN99bKGF/shrVYD5jQviNnkZfu"
        frameBorder="0"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allowFullScreen
        sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-presentation"
        loading="lazy"
        style={{ 
          background: 'transparent',
          border: '1px solid rgba(139, 0, 0, 0.2)'
        }}
        title="Generation History"
      />
    </div>
  );
}