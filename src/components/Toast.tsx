import { X } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';

export default function Toast() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-lg 
                     transform transition-all duration-300 ease-in-out
                     ${
                       notification.type === 'success'
                         ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                         : 'bg-red-950 text-red-200 border border-red-500/20'
                     }`}
        >
          <p className="pr-4">{notification.message}</p>
          <button
            onClick={() => removeNotification(notification.id)}
            className="p-1 hover:bg-black/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}