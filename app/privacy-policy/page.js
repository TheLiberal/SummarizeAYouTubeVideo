import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: January 1, 2024

1. Introduction

This Privacy Policy applies to the SummarizeAYouTubeVideo website, accessible at https://summarizeayoutubevideo.com. It outlines our practices regarding the collection, use, and protection of personal and non-personal data.

2. Data Collection

We collect personal data such as name, email, and payment information primarily for order processing. Non-personal data is collected through web cookies to enhance user experience on our website.

3. Purpose of Data Collection

Personal data is used for processing orders and providing our services. Non-personal data helps improve our website's functionality and user experience.

4. Data Sharing

SummarizeAYouTubeVideo does not share collected data with third-party entities.

5. Children's Privacy

Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to remove such information and terminate the child's account.

6. Data Protection

We are committed to protecting your data and will take appropriate measures to ensure its security, integrity, and confidentiality in accordance with applicable data protection laws in Poland.

7. Updates to the Privacy Policy

We may update this Privacy Policy from time to time. Users will be notified of any changes via email.

8. Rights of Data Subjects

Under Polish law, you have the right to access, rectify, delete, or restrict the processing of your personal data. You also have the right to object to processing and the right to data portability.

9. Governing Law

This Privacy Policy is governed by the laws of Poland and shall be interpreted accordingly.

10. Contact Information

For inquiries or concerns regarding this Privacy Policy, please contact us at bgulaj+smmrzytvid@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
