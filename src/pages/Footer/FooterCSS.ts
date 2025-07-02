import React from "react";

// Footer Tailwind CSS classes organized by component section
export const footerStyles = {
  // Main container styles
  container: "w-full bg-black overflow-hidden",
  relativeWrapper: "relative",
  backgroundImage: "absolute w-full h-[676px] top-0 left-0 [background:url(/Footer/image.png)_50%_50%_/_cover]", // Reverted to just gradient
  dotsOverlay: "absolute top-0 left-0 w-full h-[338px] bg-[url(/Footer/footerdots.png)] bg-top bg-cover bg-no-repeat opacity-50 z-0", // New style for dots overlay
  contentContainer: "relative max-w-[1200px] mx-auto",
  contentRelativeWrapper: "relative",

  // Decorative image styles
  decorativeImage: "absolute w-[699px] h-[656px] top-[-301px] right-[-30px] opacity-[0.68] z-[1]",
  decorativeImageContent: "w-full h-full",

  // Main content wrapper
  mainContentWrapper: "flex flex-col w-full items-start gap-[60px] pt-[70px] px-0 relative",

  // Header section styles
  headerSection: "flex flex-col w-full items-start gap-8 relative",
  headerContentWrapper: "flex flex-col w-full items-start gap-6 pr-[680px]",
  headerTitleWrapper: "flex flex-col w-[520px] items-start",
  headerTitle: "font-semibold text-[52px] text-[#ffffffde] tracking-[-2.08px] leading-[62.4px]",
  headerTitleWhitespace: "font-semibold text-[52px] text-[#ffffffde] tracking-[-2.08px] leading-[62.4px] whitespace-nowrap",
  headerSubtitleWrapper: "w-[470px]",
  headerSubtitle: "font-normal text-[#7b7c8c] text-[16.9px] leading-[25.6px]",

  // CTA Button styles
  ctaButton: "w-[156px] h-[40.8px] rounded-[999px] border-[0.8px] border-solid border-[#ffffff66] shadow-[-12px_0px_21px_-3px_#ff5900b2,-7px_0px_10px_-5px_#ff3884] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_37%,rgba(208,208,208,1)_100%)] text-black font-normal text-[14.2px]",

  // Footer links section
  linksSection: "w-full grid grid-cols-4 gap-4",
  linkColumn: "flex flex-col gap-4",
  linkColumnTitle: "font-medium text-[#ffffffde] text-[16.9px] leading-[25.6px]",
  linksList: "flex flex-col gap-2",
  linkItem: "flex items-center gap-2 relative h-[29.6px] overflow-hidden",
  linkText: "font-normal text-[#7b7c8c] text-[16.9px] leading-[25.6px]",
  linkIcon: "w-4 h-4 text-[#7b7c8c]",
  linkDivider: "absolute w-1.5 h-px bottom-0 left-0 bg-[#cfcfcf33]",

  // Copyright bar
  copyrightCard: "w-full h-[54.4px] bg-[#0d0d12] rounded-[20px] overflow-hidden border-none",
  copyrightCardContent: "p-0",
  copyrightCardTextWrapper: "p-4",
  copyrightText: "font-normal text-[#7b7c8c] text-[15px] leading-[22.4px]"
}; 