import React from "react";
import { Link } from "react-router-dom";
import "../styles/LegalPages.css";

const DataDeletion = () => {
return (
<> 
<div className="legal-banner">

    <Link to="/" className="back-home-btn">
      ← Back to Home
    </Link>

    <h1>Data Deletion Request</h1>

    <p>
      VPRO Skills Edutech
    </p>

  </div>

  <section className="legal-content">

    <div className="legal-container">

      <h2>Request Removal of Personal Data</h2>

      <p>
        At VPRO Skills Edutech, we respect your privacy and provide
        users with the ability to request deletion of their personal
        information from our systems.
      </p>

      <p>
        If you have previously registered for a course, webinar,
        free demo session, newsletter, or submitted your information
        through our website, you may request removal of your data
        at any time.
      </p>

      <h2>Information That May Be Deleted</h2>

      <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Mobile Number</li>
        <li>Course Registration Details</li>
        <li>Marketing Communication Preferences</li>
        <li>Lead Form Information</li>
        <li>Student Inquiry Records</li>
      </ul>

      <h2>How To Submit A Request</h2>

      <p>
        To request deletion of your personal data, please send an email
        to the address below with the required details.
      </p>

      <div className="legal-highlight-box">

        <h3>Email Address</h3>

        <p>
          info@vproskills.com
        </p>

      </div>

      <h2>Please Include</h2>

      <ul>
        <li>Full Name</li>
        <li>Registered Email Address</li>
        <li>Registered Mobile Number</li>
        <li>Reason For Deletion Request (Optional)</li>
      </ul>

      <h2>Processing Time</h2>

      <p>
        Valid requests are typically reviewed and processed within
        30 business days from the date of submission.
      </p>

      <h2>Exceptions</h2>

      <p>
        Certain information may be retained where required by law,
        regulatory obligations, dispute resolution requirements,
        fraud prevention measures, or legitimate business purposes.
      </p>

      <h2>Need Assistance?</h2>

      <p>
        If you have any questions regarding data privacy or deletion
        requests, please contact our support team at:
      </p>

      <p>
        <strong>Email:</strong> info@vproskills.com
      </p>

    </div>

  </section>

  <footer className="legal-footer">
    <p>
      © 2026 VPRO Skills Edutech. All Rights Reserved.
    </p>

    <p>
      Protecting Your Privacy & Data Rights
    </p>
  </footer>
</>

);
};

export default DataDeletion;
