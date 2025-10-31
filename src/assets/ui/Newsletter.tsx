// components/Newsletter.tsx
import { useEffect } from 'react';

const Newsletter = () => {
    useEffect(() => {
        // Supascribe script
        const script = document.createElement('script');
        script.src = 'https://js.supascribe.com/v1/loader/J7DfL11GNjP7XJoNnEUGtkwDni82.js';
        script.async = true;
        document.body.appendChild(script);

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

                {/* Supascribe embed */}
                <div
                    data-supascribe-embed-id="923915785890"
                    data-supascribe-subscribe
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto rounded-2xl"
                />
            </div>
        </div>
    );
};

export default Newsletter;
