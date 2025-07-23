// pages/terms.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: July 23, 2025
        </p>

        <p className="mb-6">
          Please read these Terms and Conditions carefully before using the
          MonkMode desktop application.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Acknowledgment</h2>
        <p className="mb-4">
          These Terms govern your access to and use of MonkMode ("the Service")
          provided by MonkMode. By creating an account or using the app, you
          agree to be bound by these Terms.
        </p>
        <p className="mb-6">
          The Service is available only to individuals over the age of 18. If
          you do not agree to these Terms, you may not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Accounts and Access
        </h2>
        <p className="mb-4">
          An account is required to access all features of MonkMode. Users must
          register with a valid email and password. Access is not available
          without login.
        </p>
        <p className="mb-6">
          After payment, you may access offline features locally. If you choose
          to use your own API keys (e.g., OpenAI), they are stored only on your
          device and are never uploaded or stored by MonkMode.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Subscriptions & Payments
        </h2>
        <p className="mb-4">
          MonkMode uses Stripe for all billing. Subscriptions are recurring and
          billed either monthly or yearly. A 3-day free trial is available, and
          it will automatically convert into a paid subscription unless
          cancelled before it ends.
        </p>
        <p className="mb-6">
          Refunds are offered within 30 days of purchase. After cancellation,
          access remains until the end of the billing cycle or trial period.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
        <p className="mb-4">
          You may request deletion of your account via email. MonkMode may
          suspend access if malicious behavior is detected, such as attempts to
          attack our database or abuse our integration with third-party
          providers like Stripe.
        </p>
        <p className="mb-6">
          We reserve the right to revoke access to the Service if these Terms
          are violated.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, MonkMode is not liable for any
          indirect, incidental, or consequential damages. Our total liability is
          limited to the amount you paid for the Service or $100, whichever is
          lower.
        </p>
        <p className="mb-6">
          The Service is provided "as is" and "as available" without warranty of
          any kind. MonkMode is not responsible for bugs, errors, or
          interruptions and does not guarantee any specific functionality or
          uptime.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed by the laws of the State of Maine,
          excluding its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Dispute Resolution
        </h2>
        <p className="mb-6">
          If you have a concern or dispute regarding the Service, please contact
          us first at <strong>psylantys@gmail.com</strong> to resolve it
          informally before pursuing legal action.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Modifications to Terms
        </h2>
        <p className="mb-6">
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page. Continued use of the Service after updates
          constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions or need support regarding these Terms and
          Conditions, contact us:
        </p>
        <p className="font-semibold">psylantys@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
