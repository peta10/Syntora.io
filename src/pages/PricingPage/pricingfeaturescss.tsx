import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pricingFeaturesStyles = {
  container: "w-full",
  headerRow: "grid grid-cols-[minmax(0,_1fr)_230px_230px_230px] items-center h-[73px] bg-[#0d0d12] border-b border-[#1a1d31] px-6",
  headerFeaturesCol: "text-white/90 font-medium text-lg",
  headerItem: "text-center text-white/90 font-medium text-lg",
  tabList: "w-full h-[73px] rounded-xl overflow-hidden bg-gradient-to-r from-[rgba(45,32,22,1)] via-[rgba(0,0,0,1)] to-[rgba(26,29,49,1)] border-none",
  tabItem: "flex-1 h-full data-[state=active]:bg-transparent data-[state=active]:shadow-none font-style-9 text-[19px] leading-[25.2px] pointer-events-none",
  activeTab: "text-style-4",
  inactiveTab: "text-[rgba(255,255,255,0.6)]",
  featureRow: (hasDescription: boolean) => 
    cn(
      "relative grid grid-cols-[minmax(0,_1fr)_230px_230px_230px] items-center w-full border-b border-[#1a1d31] px-6",
      hasDescription ? "h-[95px]" : "h-[72px]"
    ),
  featureNameContainer: "flex flex-col justify-center",
  featureName: "font-medium text-[17.1px] leading-[25.6px] text-white/90",
  featureDescription: "text-sm text-neutral-400 mt-1",
  indicatorContainer: "flex items-center justify-center",
  checkIconContainer: "flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#6E86FF] to-[#FF6BBA] p-1",
  checkIconGradient: "w-4 h-4 text-white",
  checkIcon: "w-4 h-4 text-[#ff00ea]",
  xIcon: "w-[18px] h-[13px] text-neutral-500",
  indicator: "flex items-center justify-center w-7 h-7",
};