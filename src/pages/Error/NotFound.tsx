import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon, SearchIcon } from "lucide-react";

export const NotFound = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Simple "search" function - in a real implementation, this would
  // redirect to a search results page
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could redirect to a search page with the query
    console.log("Search query:", searchQuery);
    alert("Search functionality would be implemented here. Query: " + searchQuery);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* SEO metadata */}
      <Helmet>
        <title>Page Not Found | Syntora</title>
        <meta name="description" content="The page you're looking for couldn't be found." />
      </Helmet>
      
      {/* Dotted Overlay - similar to Hero */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        {/* Error Code */}
        <div className="mb-6 relative">
          <h1 className="text-[10rem] md:text-[14rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF]/20 to-[#FF6BBA]/20">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="mb-8">
          <TextAnimate
            as="h2"
            animation="blurInUp"
            by="word"
            once
            className="font-bold font-poppins text-3xl sm:text-4xl leading-tight tracking-tighter text-[#ffffffde]"
          >
            Page Not Found
          </TextAnimate>
        </div>

        {/* Description */}
        <p className="text-lg text-[#ffffffb3] mb-10 max-w-2xl mx-auto">
          The page you were looking for doesn't exist or has been moved. 
          Don't worry though, you can find your way back to our workflow automation services.
        </p>

        {/* Search Box */}
        <div className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm mb-10 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">Looking for something specific?</h3>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="Search our site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-black/50 border-white/10 text-white placeholder:text-white/50"
            />
            <Button 
              type="submit"
              className="bg-[#0d0d12] border border-[#6E86FF]/50 text-white hover:bg-[#0d0d12]/80 hover:border-[#6E86FF]"
            >
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <Link to="/" className="bg-[#0d0d12] p-4 rounded-lg border border-white/10 backdrop-blur-sm flex flex-col items-center transition-all hover:border-white/30">
            <HomeIcon className="h-8 w-8 mb-2 text-[#6E86FF]" />
            <span className="text-white font-medium">Homepage</span>
          </Link>
          
          <Link to="/features" className="bg-[#0d0d12] p-4 rounded-lg border border-white/10 backdrop-blur-sm flex flex-col items-center transition-all hover:border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-[#6E86FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-white font-medium">Our Services</span>
          </Link>
          
          <Link to="/contact" className="bg-[#0d0d12] p-4 rounded-lg border border-white/10 backdrop-blur-sm flex flex-col items-center transition-all hover:border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-[#6E86FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-white font-medium">Contact Us</span>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/">
            <ShinyButton
              className="rounded-full text-sm font-normal px-6 py-2.5 border-[0.8px] border-solid border-[#1a1d31]"
              style={{
                background: '#0d0d12',
                '--primary': '#6E86FF',
                boxShadow: '0 0 15px 2px rgba(110, 134, 255, 0.5)',
              } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] flex items-center">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Return to Homepage
              </span>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound; 