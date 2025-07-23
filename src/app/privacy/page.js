// pages/privacy.tsx or pages/privacy.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: July 23, 2025
        </p>

        <p className="mb-6">
          This Privacy Policy describes how we collect, use, and disclose your
          information when you use the Service. By using the Service, you agree
          to this policy and how we protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Information We Collect
        </h2>
        <p className="mb-4">
          We collect your <strong>email address</strong> and answers to{" "}
          <strong>survey questions</strong> within the app. We also store
          whether you're currently subscribed and the date your{" "}
          <strong>free trial ends</strong>.
        </p>
        <p className="mb-6">
          We do <strong>not</strong> store notes, AI chats, or any other
          user-generated content from within the app.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Tracking and Logs</h2>
        <p className="mb-4">
          We do not use any analytics or A/B testing tools. We only track{" "}
          <strong>error logs</strong> and changes to your subscription status
          (when you subscribe, cancel, or update).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Third-Party Services
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Supabase:</strong> Stores email, password, and survey data
            securely.
          </li>
          <li>
            <strong>Stripe:</strong> Handles all payments. We only pass email
            and user ID as metadata via secure webhooks.
          </li>
          <li>
            <strong>OpenAI:</strong> Used to generate AI responses. We do not
            store any chat or prompt data.
          </li>
          <li>
            <strong>Vercel:</strong> Hosts our app and receives webhook events,
            but does not store user data directly.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Payment & Subscription
        </h2>
        <p className="mb-6">
          We do not store your payment method or billing details. All
          transactions are securely processed through{" "}
          <strong>Stripe Checkout</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Account Deletion & Retention
        </h2>
        <p className="mb-4">
          Account data is currently retained indefinitely unless you contact
          support to request deletion. We do not offer in-app deletion at this
          time.
        </p>
        <p className="mb-6">
          Passwords are securely managed by Supabase and are not accessible to
          us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Eligibility</h2>
        <p className="mb-6">
          Our service is intended for users over the age of 18 due to access to
          uncensored AI language models.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Business Transfers
        </h2>
        <p className="mb-6">
          If we are involved in an acquisition or business transfer, we will
          notify users before any personal data is transferred or becomes
          subject to a different policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions or requests regarding your privacy or data, you
          can reach us at:
        </p>
        <p className="font-semibold">psylantys@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
