import { useState, useEffect } from 'react';

const ScrollVolumeTracker = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        // Total height of the page
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollTop = window.scrollY;

        // Calculate scroll percentage
        const progress = (scrollTop / totalHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        // Attach the scroll event
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inline CSS for the striped design
    const stripeStyle: any = {
        backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px, 
            #ffffff 2px,
            #ffffff 8px
        )`,
    };

    return (
        <div className="fixed top-1/2 right-[10%] h-[100px] -translate-y-1/2 z-50 hidden md:block">
            {/* Scroll Volume Bar */}
            <div className="w-[15px] h-[98px] relative bg-[#F1F1F1] relative">
                <div className="w-[15px] h-[100px] relative z-[10]" style={stripeStyle}>
                </div>
                <div
                    className="w-[15px] bg-black absolute top-0 z-[5]"
                    style={{ height: `${scrollProgress}%` }}
                ></div>
            </div>

            {/* Volume Design */}
            {/* <div className="fixed bottom-[20px] right-[20px] bg-blue-500 text-white rounded-full w-[80px] h-[80px] flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold">{Math.round(scrollProgress)}%</span>
            </div> */}
        </div>
    );
};

export default ScrollVolumeTracker;
