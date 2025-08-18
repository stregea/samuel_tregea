import React, {useRef, useEffect, useState} from "react";
import styles from "./FadeIn.module.css";

/**
 * Property types for the FadeIn component.
 */
interface FadeInProps {
	children: React.ReactNode;
	delay?: number;
	fadeInOnView?: boolean;
};

/**
 * Wraps children in a div that fades in when it enters the viewport.
 * 
 * @component
 * @example
 * <FadeIn delay={0.5}>
 *   <YourContent />
 * </FadeIn>
 * or
 * <FadeIn fadeInOnView={false}>
 *   <YourContent />
 * </FadeIn>
 *
 * @param {React.ReactNode} children - The content to animate in.
 * @param {number} [delay=0] - Optional delay (in seconds) before the fade-in animation starts.
 * @param {boolean} [fadeInOnView=true] - Optional parameter that can enable/disable the fade-in effect based on visibility.
 * @returns {JSX.Element} A div that fades in when it enters the viewport.
 */
export default function FadeIn({ children, delay = 0, fadeInOnView = true }: FadeInProps) {
	// Reference to the DOM element we want to observe.
	const ref = useRef<HTMLDivElement>(null);
	// State to track visibility.
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const currentRef = ref.current;

		// If fadeInOnView is false, set the visibilility immediately.
		if (!fadeInOnView) {
			setIsVisible(true);
			return;
		}

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
		if (currentRef) {
			observer.observe(currentRef);
		}

		// Cleanup the observer on component unmount.
		// This prevents memory leaks and ensures the observer is removed when the component is no longer in the DOM.
		// This is important for performance and to avoid unnecessary observations.
		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [fadeInOnView]); // Dependency array ensures the effect runs only once when the component mounts or when fadeInOnView changes.

	// Accepts delay in seconds (e.g., 0.5, 1.2, etc.)
	const style = {
		transitionDelay: `${delay}s`,
	};
	
	return (
		<div 
			ref={ref} 
			className={`${styles.fadeIn} ${isVisible ? styles.visible : styles.hidden}`}
			style={style}
			data-testid={"fadeIn"}
		>
			{children}
		</div>
	);
};