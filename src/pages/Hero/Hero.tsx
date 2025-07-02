import { useEffect, useRef, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TextAnimate } from "../../components/magicui/text-animate";
import { ShinyButton } from "../../components/magicui/shiny-button";

export const Hero = (): JSX.Element => {
  // Reference to video element to control playback speed
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  
  // Handle video setup and events
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    // Set playback speed
    videoElement.playbackRate = 0.7; // Slow down to 70% of normal speed
    
    // Handle when video ends - keep it on last frame
    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Make sure it stays on the last frame
      if (videoElement.currentTime > 0) {
        // Pause on the last frame
        videoElement.pause();
      }
    };
    
    // Handle user interaction to restart video
    const handleInteraction = () => {
      if (videoEnded && videoElement) {
        // Reset and play the video again
        videoElement.currentTime = 0;
        videoElement.play();
        setVideoEnded(false);
      }
    };
    
    // Add event listeners
    videoElement.addEventListener('ended', handleVideoEnd);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('focus', handleInteraction);
    document.addEventListener('click', handleInteraction);
    
    // Clean up
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('focus', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, [videoEnded]);

  // Pulse animation for the green dot
  const pulseAnimation = {
    scale: [1, 1.5, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
    }
  };

  return (
    <section className="relative w-full overflow-hidden h-[833px] bg-black">
      {/* Video background with grayscale */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          className="absolute h-full w-full object-cover opacity-[0.20]"
          src="/assets/istockphoto-1491463133-640_adpp_is.mp4"
        ></video>
      </div>
      
      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      ></div>

      {/* Content Container - Added justify-center, removed vertical padding */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        {/* Use padding for vertical spacing, flex column layout */}
        {/* Removed responsive padding classes */}
        {/* <div className="flex flex-col items-center text-center pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-16 lg:pb-28"> */}
          
          {/* Notification badge */} 
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 }
            }}
          >
            <Badge className="w-auto rounded-full flex items-center justify-center px-5 py-1.5 border border-[#7e7f80]/30" /* Removed fixed height */
              style={{
                background: 'linear-gradient(90deg, rgba(20, 20, 20, 0.8) 0%, rgba(126, 127, 128, 0.2) 50%, rgba(20, 20, 20, 0.8) 100%)'
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-1.5 h-1.5 bg-[#4dff64] rounded-full"
                  animate={pulseAnimation}
                ></motion.div>
                <span className="text-sm md:text-base text-[#c3c3c4] font-normal whitespace-nowrap"> {/* Responsive text */} 
                  Now Onboarding New Clients
                </span>
              </div>
            </Badge>
          </motion.div>

          {/* Main heading */}
          <div className="mb-6 md:mb-8 max-w-3xl"> {/* Added max-width */}
            <TextAnimate
              as="h1" // Render as h1 for semantic correctness
              animation="blurInUp" // Use the desired animation
              by="word" // Animate by word
              once // Animate only once
              className="font-bold font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tighter text-[#ffffffde]" // Apply original h1 styles
            >
              Workflow Automation Services by Syntora
            </TextAnimate>
          </div>

          {/* Description text */}
          <div className="mb-8 md:mb-10 max-w-2xl"> {/* Added max-width */} 
            <p className="text-base md:text-lg leading-relaxed text-[#ffffffb3] font-normal">
              Streamline business processes with managed automation solutions. We help businesses in Naperville, Chicago, and across the US automate workflows and scale smarter.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5"> {/* Responsive layout, gap */} 
            <Link to="/time-audit">
              <ShinyButton
                className="rounded-full text-gray-700 text-sm md:text-base font-normal px-6 py-2.5 border-[0.8px] border-solid border-[#ffffff66] overflow-hidden"
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 37%, rgba(208, 208, 208, 1) 100%)',
                  '--primary': '#E0E0E0',
                  boxShadow: '0 0 15px 4px rgba(255, 89, 0, 0.6)',
                } as React.CSSProperties}
              >
                Time Audit
              </ShinyButton>
            </Link>

            <Link to="/book-a-call">
              <ShinyButton
                className="rounded-full text-sm font-normal px-5 py-2 border-[0.8px] border-solid border-[#1a1d31]"
                style={{
                  background: '#0d0d12',
                  '--primary': '#6E86FF',
                  boxShadow: '0 0 15px 2px rgba(110, 134, 255, 0.5)',
                } as React.CSSProperties}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                  Book A Call
                </span>
              </ShinyButton>
            </Link>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};
