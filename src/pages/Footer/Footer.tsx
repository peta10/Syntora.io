import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { footerStyles } from "./FooterCSS";
import { Link } from 'react-router-dom';
import { ShinyButton } from "@/components/magicui/shiny-button";

export const Footer = (): JSX.Element => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.relativeWrapper}>
        {/* Background image - path defined in FooterCSS.ts */}
        <div className={footerStyles.backgroundImage} />
        {/* Dots Overlay */}
        <div className={footerStyles.dotsOverlay} />

        <div className={footerStyles.contentContainer}>
          <div className={footerStyles.contentRelativeWrapper}>
            {/* Decorative image - visible on tablet/desktop */}
            <div className={`${footerStyles.decorativeImage} hidden sm:block`}>
              <img
                className={footerStyles.decorativeImageContent}
                alt="Global workflow automation services illustration"
                src="/Footer/Globe.png"
              />
            </div>

            <div className="flex flex-col w-full items-center sm:items-start pt-10 sm:pt-[70px] px-4 sm:px-0 relative">
              {/* Header section */}
              <div className={`flex flex-col w-full items-center sm:items-start gap-6 sm:gap-8 relative ${footerStyles.headerSection.replace('items-start', '')}`}>
                <div className={`flex flex-col w-full max-w-xl sm:max-w-none items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left ${footerStyles.headerContentWrapper.replace('items-start', '').replace('pr-[680px]', 'sm:pr-[680px]')}`}>
                  <div className={`flex flex-col items-center sm:items-start ${footerStyles.headerTitleWrapper.replace('w-[520px]', 'w-full sm:w-[520px]')}`}>
                    <h1 className={`font-semibold text-3xl sm:text-4xl md:text-[52px] text-[#ffffffde] tracking-tight sm:tracking-[-2.08px] leading-tight sm:leading-[62.4px] ${footerStyles.headerTitleWhitespace.replace('text-[52px]', '')}`}>
                      Grow Globally with
                    </h1>
                    <h1 className={`font-semibold text-3xl sm:text-4xl md:text-[52px] text-[#ffffffde] tracking-tight sm:tracking-[-2.08px] leading-tight sm:leading-[62.4px] ${footerStyles.headerTitle.replace('text-[52px]', '')}`}>
                      Our Automations
                    </h1>
                  </div>

                  <div className={`w-full sm:${footerStyles.headerSubtitleWrapper}`}>
                    <p className="font-normal text-[#7b7c8c] text-base md:text-[16.9px] leading-relaxed sm:leading-[25.6px]">
                      Automate Faster, Scale Smarter
                    </p>
                  </div>
                </div>

                {/* CTA Button */} 
                <Link to="/book-a-call" className="w-full sm:w-auto flex justify-center sm:justify-start"> 
                  <ShinyButton
                    className="w-full sm:w-auto rounded-full text-gray-700 text-sm font-normal px-6 py-2.5 border-[0.8px] border-solid border-[#ffffff66] overflow-hidden"
                    style={{
                      background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 37%, rgba(208, 208, 208, 1) 100%)',
                      '--primary': '#E0E0E0',
                      boxShadow: '0 0 15px 4px rgba(255, 89, 0, 0.6)',
                    } as React.CSSProperties}
                  >
                    GET STARTED
                  </ShinyButton>
                </Link>
              </div>

              {/* Main content grid */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 py-8 text-center sm:text-left">
                {/* Left Column: Contact Info & Service Desc */}
                <div className="flex flex-col gap-2 md:pr-8">
                  {/* NAP */}
                  <h4 className="font-semibold text-lg mb-1 text-white">Syntora</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    1056 N Mill St<br />
                    Naperville, IL 60563, United States<br />
                  </p>
                  <p className="text-gray-400 mt-1 text-sm">Phone: <a href="tel:+1-630-743-9686" className="hover:text-white">+1 (630) 743-9686</a></p>
                  {/* Service Description */}
                  <h4 className="font-semibold text-lg mb-1 mt-3 text-white">Our Services</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Syntora provides managed workflow automation services, specializing in n8n, for businesses in Naperville, Chicagoland, and across the US.
                  </p>
                </div>

                {/* Right Column: Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 sm:mt-0">
                  {/* Link Column 1: Company */}
                  <div className="flex flex-col items-center sm:items-start gap-2">
                    <h3 className={footerStyles.linkColumnTitle}>
                      Company
                    </h3>
                    <Link to="/about" className={footerStyles.linkText + " hover:text-white"}>About Us</Link>
                    <Link to="/contact" className={footerStyles.linkText + " hover:text-white"}>Contact</Link>
                    <Link to="/book-a-call" className={footerStyles.linkText + " hover:text-white"}>Book a Call</Link>
                  </div>

                  {/* Link Column 2: Services */}
                  <div className="flex flex-col items-center sm:items-start gap-2">
                    <h3 className={footerStyles.linkColumnTitle}>
                      Services
                    </h3>
                    <Link to="/features" className={footerStyles.linkText + " hover:text-white"}>Our Services</Link>
                    <Link to="/chicago-naperville-automation-services" className={footerStyles.linkText + " hover:text-white"}>Local Automation</Link>
                    <Link to="/time-audit" className={footerStyles.linkText + " hover:text-white"}>Time Audit Tool</Link>
                    <Link to="/pricing" className={footerStyles.linkText + " hover:text-white"}>Pricing</Link>
                  </div>

                  {/* Link Column 3: Resources & Legal */}
                  <div className="flex flex-col items-center sm:items-start gap-2">
                    <h3 className={footerStyles.linkColumnTitle}>
                      Resources & Legal
                    </h3>
                    <Link to="/blog" className={footerStyles.linkText + " hover:text-white"}>Blog</Link>
                    <Link to="/privacy-policy" className={footerStyles.linkText + " hover:text-white"}>Privacy Policy</Link> 
                    <a href="#" className={footerStyles.linkText + " hover:text-white"}>Terms & Conditions</a>
                  </div>
                </div>
              </div>
              
              {/* Copyright bar */}
              <Card className={`${footerStyles.copyrightCard} mt-4`}>
                <CardContent className={footerStyles.copyrightCardContent}>
                  <div className="flex justify-center sm:justify-start p-4">
                    <p className={footerStyles.copyrightText}>
                      All copyrights reserved for @Syntora
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 