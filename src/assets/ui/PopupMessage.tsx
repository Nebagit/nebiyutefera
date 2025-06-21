import React, { useEffect, useRef } from 'react';

interface PopupCardProps {
    type: 'success' | 'error';
    message: string;
    onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ type, message, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const bgColor =
        type === 'success'
            ? 'from-green-400 to-emerald-600'
            : 'from-red-500 to-pink-600';

    const emoji = type === 'success' ? '✅' : '❌';
    const title = type === 'success' ? 'Message Sent!' : 'Message Failed';

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div
                ref={popupRef}
                className={`bg-gradient-to-br ${bgColor} p-6 rounded-2xl text-white shadow-2xl w-[90%] max-w-sm text-center transform scale-100 transition-all duration-300`}
            >
                <div className="text-4xl mb-2">{emoji}</div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                    👍 Okay
                </button>
            </div>
        </div>
    );
};

export default PopupCard;
