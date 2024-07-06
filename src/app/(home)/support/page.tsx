import { Box } from "@mui/material";
import Link from "next/link";

const Page = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        mt: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          px: ["20px", "100px"],
        }}
      >
        <h1>Support</h1>
        <p>
          Welcome to the Coolify Support page. We&apos;re here to help you with any
          questions or issues you may have while using our services. Please find
          the relevant information below to get the support you need.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, need assistance, or would like to provide
          feedback, please don&apos;t hesitate to contact us. You can reach us via
          email or LinkedIn:
        </p>
        <ul>
          <li>
            Email:{" "}
            <Link
              href="mailto:kahaneajinkya051@gmail.com"
              className="link"
              style={{ color: "white", textDecoration: "underline" }}
              target="_blank"
            >
              kahaneajinkya051@gmail.com
            </Link>
          </li>
          <li>
            LinkedIn:{" "}
            <Link
              href="https://linkedin.com/in/0xajinkya"
              className="link"
              style={{ color: "white", textDecoration: "underline" }}
              target="_blank"
            >
              0xajinkya&apos;s LinkedIn
            </Link>
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQs)</h2>
        <h3>1. How do I create an account on Coolify?</h3>
        <p>
          To create an account, click on the &quot;Sign Up&quot; button on the homepage
          and provide your name, email, and password. Follow the on-screen
          instructions to complete the registration process.
        </p>

        <h3>2. How do I save a LinkedIn post to my collections?</h3>
        <p>
          Once you have created an account and logged in, you can save LinkedIn
          posts to your collections by using the Coolify browser extension.
          Simply click the extension icon while viewing a LinkedIn post, and it
          will be saved to your chosen collection.
        </p>

        <h3>3. How do I access my saved collections?</h3>
        <p>
          To access your saved collections, log in to your Coolify account on
          our website. Navigate to the &quot;Collections&quot; section to view and manage
          your saved LinkedIn posts.
        </p>

        <h2>Troubleshooting</h2>
        <p>
          If you encounter any issues while using Coolify, please try the
          following troubleshooting steps:
        </p>
        <ul>
          <li>
            Ensure that you are using the latest version of your web browser.
          </li>
          <li>Clear your browser&apos;s cache and cookies.</li>
          <li>
            Disable any browser extensions that might be interfering with
            Coolify.
          </li>
          <li>Restart your browser or device.</li>
        </ul>
        <p>
          If you are still experiencing issues, please contact us for further
          assistance.
        </p>

        <h2>Feedback</h2>
        <p>
          Your feedback is important to us. If you have any suggestions,
          comments, or concerns about Coolify, please let us know. We are always
          looking for ways to improve our service and appreciate your input.
        </p>

        <p>Thank you for using Coolify!</p>
      </Box>
    </Box>
  );
};

export default Page;
