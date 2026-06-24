import React from "react";
import { Link } from "react-router-dom";
import "../styles/LegalPages.css";

const PrivacyPolicy = () => {
return (
<> 
<div className="legal-banner">

    <Link to="/" className="back-home-btn">
      ← Back to Home
    </Link>

    <h1>Privacy Policy</h1>

    <p>
      VPRO Skills Edutech
    </p>

  </div>

  <section className="legal-content">

    <div className="legal-container">

      <h2>Introduction</h2>

      <p>
        VPRO Skills Edutech ("VPRO Skills", "we", "our", or "us")
        values your privacy and is committed to protecting the
        personal information you share with us. This Privacy Policy
        explains how we collect, use, store, and safeguard your data
        when you access our website, training programs, webinars,
        workshops, demo sessions, and educational services.
      </p>

      <h2>Information We Collect</h2>

      <p>
        We may collect the following information when you interact
        with our website or services:
      </p>

      <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Mobile Number</li>
        <li>Educational Qualification</li>
        <li>Course Preferences</li>
        <li>Career Interests</li>
        <li>Location Information</li>
        <li>Communication History</li>
        <li>Website Usage Information</li>
      </ul>

      <h2>How We Use Your Information</h2>

      <p>
        The information collected may be used for:
      </p>

      <ul>
        <li>Course Registration & Enrollment</li>
        <li>Free Demo Session Registration</li>
        <li>Student Support & Assistance</li>
        <li>Career Guidance & Counseling</li>
        <li>Placement Assistance Programs</li>
        <li>Course Updates & Announcements</li>
        <li>Technical Support</li>
        <li>Improving User Experience</li>
        <li>Marketing & Promotional Activities</li>
      </ul>

      <h2>Communication Consent</h2>

      <p>
        By submitting your information through our website,
        forms, advertisements, webinars, or registration pages,
        you consent to receive communications from VPRO Skills
        via:
      </p>

      <ul>
        <li>Email</li>
        <li>WhatsApp Messages</li>
        <li>SMS Notifications</li>
        <li>Phone Calls</li>
        <li>Learning Platform Notifications</li>
      </ul>

      <h2>Analytics & Tracking Technologies</h2>

      <p>
        We use industry-standard analytics and tracking tools
        to improve our website and services.
      </p>

      <ul>
        <li>Google Analytics</li>
        <li>Google Tag Manager</li>
        <li>Meta Pixel</li>
        <li>Facebook Conversion API</li>
        <li>Cookies & Similar Technologies</li>
      </ul>

      <h2>Data Protection & Security</h2>

      <p>
        We implement reasonable technical and organizational
        measures to protect your personal information against
        unauthorized access, disclosure, alteration, or destruction.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        Certain services may be provided through trusted third-party
        platforms including payment gateways, learning management
        systems, analytics providers, cloud hosting providers,
        and communication platforms.
      </p>

      <h2>Data Retention</h2>

      <p>
        We retain information only for as long as necessary to
        provide educational services, comply with legal obligations,
        resolve disputes, and enforce agreements.
      </p>

      <h2>Your Rights</h2>

      <p>
        You may request access, correction, modification,
        or deletion of your personal information by contacting us.
      </p>

      <h2>Policy Updates</h2>

      <p>
        VPRO Skills reserves the right to update this Privacy Policy
        periodically. Changes will be reflected on this page along
        with the updated effective date.
      </p>

      <h2>Contact Information</h2>

      <div className="legal-highlight-box">

        <h3>VPRO Skills Edutech</h3>

        <p>
          Email: info@vproskills.com
        </p>

      </div>

    </div>

  </section>

  <footer className="legal-footer">

    <p>
      © 2026 VPRO Skills Edutech. All Rights Reserved.
    </p>

    <p>
      Protecting Your Privacy & Digital Rights
    </p>

  </footer>
</>

);
};

export default PrivacyPolicy;
