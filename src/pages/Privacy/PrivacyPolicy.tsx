import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* SEO metadata */}
      <Helmet>
        <title>Privacy Policy | Syntora</title>
        <meta name="description" content="Syntora's privacy policy details how we collect, use, and protect your information when using our workflow automation services." />
      </Helmet>
      
      {/* Dotted Overlay - similar to Hero */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-bold font-poppins text-3xl sm:text-4xl leading-tight tracking-tighter text-[#ffffffde] mb-12 text-center">
          Privacy Policy
        </h1>
        
        <div className="text-[#ffffffb3] space-y-8">
          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <p className="mb-4">
              At Syntora ("we", "us", "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our workflow automation services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">1. Collection of Your Information</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we collect may include:
            </p>
            <h3 className="text-lg font-medium text-[#ffffffde] mt-4 mb-2">Personal Data</h3>
            <p className="mb-2">
              When you use our services or fill out forms on our website, we may collect personally identifiable information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information</li>
              <li>Information provided when scheduling consultations</li>
              <li>Information from the Time Audit Tool</li>
            </ul>

            <h3 className="text-lg font-medium text-[#ffffffde] mt-4 mb-2">Usage Data</h3>
            <p>
              We automatically collect information about your computer hardware and software when you visit our website. This information can include: IP address, browser type, domain names, access times, and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of our website.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">2. Use of Your Information</h2>
            <p className="mb-2">
              Having accurate information about you helps us provide a smooth and efficient experience. We may use information collected about you in the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>To provide our services and fulfill our contractual obligations</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send administrative information, such as updates, security alerts, and support messages</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
              <li>To improve our website and services</li>
              <li>To process payments for our services</li>
              <li>To send marketing and promotional communications (with your consent)</li>
              <li>To protect against fraudulent, unauthorized, or illegal activity</li>
            </ul>
            <p>
              We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need it for another reason that is compatible with the original purpose.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">3. Storage and Protection of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to protect your personal information from unauthorized access and misuse. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee that your information will not be compromised.
            </p>
            <p className="mb-4">
              Your data is stored securely on our servers and those of our service providers. We retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p>
              In the event of a data breach that affects your personal information, we will notify you in compliance with applicable law.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">4. Disclosure of Your Information</h2>
            <p className="mb-2">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.</li>
            </ul>
            <p>
              With your consent: We may disclose your personal information for any other purpose with your consent.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">5. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites and applications of interest, including social media platforms and payment processors. Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">6. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize the site and improve your experience. When you access our website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the site.
            </p>
            <p>
              You may opt out of Google Analytics tracking by using the Google Analytics Opt Out Browser add-on or by adjusting your browser's cookie settings.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">7. Your Rights Under GDPR</h2>
            <p className="mb-2">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Syntora aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <p className="mb-4">
              Your rights include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Right to Access:</strong> You have the right to access information we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
              <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal information, under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact us using the contact details provided below. We will respond to your request within one month.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">8. California Privacy Rights</h2>
            <p className="mb-4">
              If you are a California resident, you have the right to request information regarding the disclosure of your personal information to third parties for direct marketing purposes. To make such a request, please contact us using the information below. You also have rights under the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mb-4">
              <p>Syntora</p>
              <p>1056 N Mill St</p>
              <p>Naperville, IL 60563</p>
              <p>United States</p>
            </div>
            <p>Phone: <a href="tel:+1-630-743-9686" className="text-[#6E86FF] hover:underline">+1 (630) 743-9686</a></p>
            <p>Email: <a href="mailto:privacy@syntora.com" className="text-[#6E86FF] hover:underline">privacy@syntora.com</a></p>
          </section>

          <div className="text-center mt-12">
            <Link to="/" className="text-[#6E86FF] hover:underline">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 