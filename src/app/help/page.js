// pages/help.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HelpPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: July 23, 2025
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Account Management</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Reset your password:</strong> Not yet implemented — please
              email <b>psylantys@gmail.com</b> for assistance.
            </li>
            <li>
              <strong>Delete your account:</strong> Send a request to{" "}
              <b>psylantys@gmail.com</b>.
            </li>
            <li>
              <strong>Change your email:</strong> Currently not supported.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Subscriptions & Billing
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Manage your subscription, cancel, or update payment methods at{" "}
              <a
                href="https://getmonkmode.app/subscription"
                className="text-blue-500 underline"
              >
                getmonkmode.app/subscription
              </a>
              .
            </li>
            <li>
              Free trials last 3 days and convert automatically into a paid plan
              unless cancelled.
            </li>
            <li>
              Refunds are available within 30 days of purchase. Contact{" "}
              <b>psylantys@gmail.com</b> to request one.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Offline Mode</h2>
          <p>
            After logging in at least once while online and purchasing a
            subscription, you can access MonkMode offline. All your data —
            notes, projects, and chats — is stored locally on your device. The
            only data stored online is your email, password (via Supabase), and
            survey responses.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Using Your Own API Key
          </h2>
          <p>
            To use your own OpenAI or LLM key, click the gear icon under
            “Projects” in the app and choose your LLM. You&apos;ll be prompted
            to paste your key. These keys are saved securely on your device (in
            your local `.env` file) and never uploaded.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Stored online:</strong> email, password (via Supabase),
              and survey answers.
            </li>
            <li>
              <strong>Stored locally only:</strong> all notes, chats, API keys,
              and app usage data.
            </li>
            <li>
              We do not store or track any AI chats or content you generate in
              the app.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How the App Works</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Creating a new project takes you into the{" "}
              <strong>canvas view</strong>, where you can drag the main node
              anywhere on screen (click outside the textbox).
            </li>
            <li>
              Click the thread title or use the sidebar to switch to a focused
              AI chat.
            </li>
            <li>
              To explore <strong>uncensored models</strong>, look for LLMs
              labeled “uncensored” in the app or use the Ollama library to
              install others.
            </li>
            <li>
              No known bugs at this time — the app is considered experimental.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p>
            If you need assistance with anything not listed here, email us
            directly at <strong>psylantys@gmail.com</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
