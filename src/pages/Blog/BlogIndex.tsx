import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, SearchIcon } from 'lucide-react';

// Blog post data for the index page
const blogPosts = [
  {
    id: 'n8n-vs-zapier-make',
    title: 'n8n vs. Zapier vs. Make: When is Managed n8n the Smarter Choice for Your Business Automation?',
    excerpt: 'Discover when n8n outperforms other automation platforms and how a managed n8n service can provide the perfect balance of power, flexibility, and ease of use for your business automation needs.',
    category: 'Technology Comparison',
    date: 'May 15, 2023',
    image: '/Blog/n8n-comparison.jpg',
    readTime: '7 min read',
  },
  {
    id: 'stop-manual-data-entry',
    title: 'Stop Manual Data Entry: How Syntora Automates CRM-to-Accounting Workflows with n8n',
    excerpt: 'Eliminate errors, save time, and improve cash flow by automating the transfer of data between your CRM and accounting software with Syntora\'s custom n8n integration solutions.',
    category: 'Use Cases',
    date: 'June 3, 2023',
    image: '/Blog/crm-accounting.jpg',
    readTime: '6 min read',
  },
  {
    id: 'diy-vs-managed-automation',
    title: 'DIY Automation vs. Managed Services: Why Syntora\'s Expertise Delivers Better Long-Term ROI',
    excerpt: 'While DIY tools have their place, discover why businesses serious about automation choose managed services for reliability, security, and ultimately better return on investment.',
    category: 'Business Value',
    date: 'June 22, 2023',
    image: '/Blog/managed-automation.jpg',
    readTime: '8 min read',
  },
  {
    id: 'chicago-automation-opportunities',
    title: 'Boosting Efficiency for Naperville & Chicago Businesses: Top 3 Workflow Automation Opportunities',
    excerpt: 'Local businesses in Chicagoland can gain a competitive edge through smart workflow automation. Explore the top opportunities specific to the Naperville and Chicago metro area.',
    category: 'Local Business',
    date: 'July 10, 2023',
    image: '/Blog/chicago-automation.jpg',
    readTime: '5 min read',
  }
];

// Add this before your component's return statement
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Workflow Automation Blog | Syntora",
  "description": "Expert strategies, comparisons, and tutorials to help businesses streamline operations, reduce manual work, and scale smarter with workflow automation.",
  "url": "https://syntora.com/blog",
  "author": {
    "@type": "Organization",
    "name": "Syntora",
    "url": "https://syntora.com"
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date, // Consider using ISO format dates like "2023-07-10"
    "mainEntityOfPage": `https://syntora.com/blog/${post.id}`,
    "image": post.image,
    "keywords": post.category.toLowerCase(),
    "timeRequired": post.readTime,
    "author": {
      "@type": "Organization",
      "name": "Syntora"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Syntora",
      "logo": {
        "@type": "ImageObject",
        "url": "https://syntora.com/logo.png" // Replace with your actual logo URL
      }
    }
  }))
};

export const BlogIndex = (): JSX.Element => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* SEO metadata */}
      <Helmet>
        <title>Workflow Automation Blog | Syntora</title>
        <meta 
          name="description" 
          content="Explore workflow automation insights, n8n tutorials, technology comparisons, and business automation tips from Syntora's experts."
        />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      
      {/* Dotted Overlay - similar to Hero */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Page Header */}
        <div className="mb-12 md:mb-16 text-center">
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            once
            className="font-bold font-poppins text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tighter text-[#ffffffde] mb-6"
          >
            Automation Insights Blog
          </TextAnimate>
          <p className="text-lg text-[#ffffffb3] max-w-3xl mx-auto">
            Expert strategies, comparisons, and tutorials to help businesses streamline operations, 
            reduce manual work, and scale smarter with workflow automation.
          </p>
        </div>
        
        {/* Search + Filters (Optional but nice to have) */}
        <div className="mb-12 bg-[#0d0d12] p-5 rounded-lg border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-grow max-w-md w-full">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/50 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#6E86FF]/50"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
            <Button variant="outline" size="sm" className="rounded-full border-white/10 bg-black/30 text-white hover:bg-black/50 hover:text-white">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-white/10 bg-black/30 text-white/70 hover:bg-black/50 hover:text-white">
              n8n
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-white/10 bg-black/30 text-white/70 hover:bg-black/50 hover:text-white">
              Tutorials
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-white/10 bg-black/30 text-white/70 hover:bg-black/50 hover:text-white">
              Business
            </Button>
          </div>
        </div>
        
        {/* Featured Post */}
        <div className="mb-12">
          <Link to={`/blog/${blogPosts[0].id}`} className="group">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              {/* Image placeholder - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6E86FF]/20 to-[#FF6BBA]/20"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-black/70 p-8 md:p-12 flex flex-col justify-end transition-all group-hover:bg-black/60">
                <span className="inline-block px-3 py-1 rounded-full bg-[#6E86FF] text-white text-xs font-medium mb-4 w-fit">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#6E86FF] transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 mb-6 line-clamp-2 md:line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-white/60 text-sm">
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.slice(1).map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="group bg-[#0d0d12] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-[#6E86FF]/20 to-[#FF6BBA]/20 relative">
                {/* Category badge */}
                <span className="absolute top-3 left-3 inline-block px-3 py-1 rounded-full bg-[#0d0d12]/90 text-white text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#6E86FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-[#0d0d12] to-[#1a1d31] rounded-xl p-8 md:p-10 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated on Automation Trends
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest automation insights, n8n tips, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#6E86FF]/50"
              />
              <Button className="bg-[#6E86FF] hover:bg-[#6E86FF]/80 text-white">
                Subscribe
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex; 