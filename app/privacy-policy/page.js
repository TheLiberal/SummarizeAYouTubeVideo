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

This Privacy Policy outlines the types of personal and non-personal data collected by SummarizeAYouTubeVideo, accessible at https://summarizeayoutubevideo.com/privacy-policy, and explains how this data is used and protected.

2. Data Collection

We collect personal data such as name, email, and payment information for order processing. Additionally, we use web cookies to collect non-personal data to enhance user experience.

3. Purpose of Data Collection

The personal data collected is used solely for the purpose of processing orders and providing our services. Non-personal data is used to improve the functionality and user experience of our website.

4. Data Sharing

SummarizeAYouTubeVideo does not share any collected data with third parties.

5. Children's Privacy

Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.

6. Updates to the Privacy Policy

We reserve the right to update our Privacy Policy at any time. Any changes will be communicated to users via email.

7. Contact Information

For any questions or concerns regarding this Privacy Policy, please contact us at blaise@fegrowthpartner.com.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
