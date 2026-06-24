import React from "react";
import { Link } from "react-router-dom";
import "../styles/LegalPages.css";

const TermsConditions = () => {
return (
<> 
<div className="legal-banner">

    <Link to="/" className="back-home-btn">
      ← Back to Home
    </Link>

    <h1>Terms & Conditions</h1>

    <p>
      VPRO Skills Edutech
    </p>

  </div>

  <section className="legal-content">

    <div className="legal-container">

      <h2>Acceptance of Terms</h2>

      <p>
        By accessing, browsing, registering, or using the services
        provided by VPRO Skills Edutech, you acknowledge that you
        have read, understood, and agreed to comply with these
        Terms and Conditions.
      </p>

      <h2>Training & Educational Services</h2>

      <p>
        VPRO Skills provides online and offline training programs,
        workshops, webinars, certification courses, career guidance,
        mentorship, and skill development services across various
        technology domains including Artificial Intelligence,
        Data Science, Python, Full Stack Development, Cloud Computing,
        and related technologies.
      </p>

      <h2>Course Enrollment</h2>

      <p>
        Enrollment is confirmed only after successful registration
        and payment completion. VPRO Skills reserves the right to
        accept or reject registrations at its discretion.
      </p>

      <h2>User Responsibilities</h2>

      <ul>
        <li>Provide accurate registration information.</li>
        <li>Maintain confidentiality of login credentials.</li>
        <li>Use learning resources responsibly.</li>
        <li>Respect trainers, mentors, and fellow learners.</li>
        <li>Comply with all applicable laws and regulations.</li>
      </ul>

      <h2>Intellectual Property Rights</h2>

      <p>
        All training materials, videos, recordings, projects,
        assignments, presentations, course content, trademarks,
        logos, and educational resources are the exclusive property
        of VPRO Skills Edutech and are protected by intellectual
        property laws.
      </p>

      <p>
        Unauthorized copying, distribution, reproduction, resale,
        or sharing of course materials is strictly prohibited.
      </p>

      <h2>Payments & Refunds</h2>

      <p>
        Fees paid for courses and programs are subject to the
        refund policy applicable to the respective course.
        Refund requests will be reviewed according to the terms
        communicated during enrollment.
      </p>

      <h2>Certification</h2>

      <p>
        Certificates may be issued upon successful completion
        of course requirements, assessments, projects, or attendance
        criteria as defined for each program.
      </p>

      <h2>Placement Assistance Disclaimer</h2>

      <p>
        VPRO Skills may provide career guidance, resume support,
        interview preparation, and placement assistance. However,
        employment opportunities, interview selection, job offers,
        salary packages, and career outcomes cannot be guaranteed.
      </p>

      <h2>Limitation of Liability</h2>

      <p>
        VPRO Skills shall not be liable for any indirect, incidental,
        consequential, or special damages arising from the use of
        its training programs, services, or educational content.
      </p>

      <h2>Modifications to Services</h2>

      <p>
        We reserve the right to modify, suspend, update, or discontinue
        any service, course, pricing, curriculum, or feature without
        prior notice.
      </p>

      <h2>Privacy</h2>

      <p>
        Your use of our services is also governed by our Privacy Policy.
      </p>

      <h2>Contact Information</h2>

      <p>
        For questions regarding these Terms & Conditions, please contact:
      </p>

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
      Empowering Careers Through Technology Education
    </p>
  </footer>
</>

);
};

export default TermsConditions;
