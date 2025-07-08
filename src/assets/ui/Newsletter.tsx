// components/Newsletter.tsx
import { useEffect } from 'react';

declare global {
    interface Window {
        CustomSubstackWidget?: {
            substackUrl: string;
            placeholder: string;
            buttonText: string;
            theme: string;
            colors: {
                primary: string;
                input: string;
                email: string;
                text: string;
            };
        };
    }
}

const Newsletter = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://substackapi.com/widget.js';
        script.async = true;
        document.body.appendChild(script);

        window.CustomSubstackWidget = {
            substackUrl: 'nebiyutefera.substack.com',
            placeholder: 'Enter your email',
            buttonText: 'Subscribe',
            theme: 'custom',
            colors: {
                primary: '#3b82f6', // Tailwind blue-500
                input: 'rgba(255,255,255,0.1)',
                email: '#ffffff',
                text: '#ffffff',
            },
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-2xl font-bold mb-4 text-white">Stay in the Loop</h4>
                <p className="text-slate-300 mb-6">
                    Get the latest updates on new projects, tech insights, and creative inspiration.
                </p>
                <div
                    id="custom-substack-embed"
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto rounded-2xl"
                />
            </div>
        </div>
    );
};

export default Newsletter;
