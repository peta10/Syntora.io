import { cn } from "@/lib/utils";
import React from "react";
// Note: Using motion from "framer-motion" as it's already installed and likely compatible,
// instead of adding "motion/react" separately unless issues arise.
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = false,
  isActive = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  isActive?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  const shouldAnimate = animate && !isActive;
  const glowOpacity = isActive ? "opacity-75" : "opacity-0";

  return (
    <div className={cn("relative p-[4px]", containerClassName)}>
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : "150% 150%",
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] blur-xl transition-opacity duration-500 will-change-transform",
          glowOpacity,
          "bg-[radial-gradient(ellipse_farthest-corner_at_0%_0%,#FF6BBA,transparent_50%),radial-gradient(ellipse_farthest-corner_at_100%_0%,#6E86FF,transparent_50%)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}; 