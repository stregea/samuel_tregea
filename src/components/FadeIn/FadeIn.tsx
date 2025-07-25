import React, {useRef, useEffect, useState} from 'react';
import styles from './FadeIn.module.css';

/**
 * Wraps children in a div that fades in when it enters the viewport.
 * 
 * @param {React.ReactNode} children - The content to animate in.
 * @param {number} [delay=0] - Optional delay (in seconds) before the fade-in animation starts.
 * 
 * Usage:
 * <FadeIn delay={0.5}>
 *   <YourContent />
 * </FadeIn>
 */
export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    // Reference to the DOM element we want to observe.
    const ref = useRef<HTMLDivElement>(null);

    // State to track visibility.
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Create an IntersectionObserver to track when the section enters the viewport.
        const observer = new IntersectionObserver(
            
            // If the element is visible, set isVisible to true.
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // trigger the effect.
                    observer.unobserve(entry.target); // Stop observing the element once it is visible.
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible.
        );

        // Start observing the element if it exists.
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup the observer on component unmount.
        // This prevents memory leaks and ensures the observer is removed when the component is no longer in the DOM.
        // This is important for performance and to avoid unnecessary observations.
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount.

    // Accepts delay in seconds (e.g., 0.5, 1.2)
    const style = {
        transitionDelay: `${delay}s`,
    };
    
    return (
        <div 
            ref={ref} 
            className={`${styles.fadeIn} ${isVisible ? styles.visible : styles.hidden}`}
            style={style}
        >
            {children}
        </div>
    );
};