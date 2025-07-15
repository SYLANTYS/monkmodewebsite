import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="min-h-[calc(100vh-300px)] flex items-center justify-center px-6 text-white">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="flex flex-col items-center gap-6 mt-10">
            <h1 className="text-2xl font-bold text-center">
              Manage Your Subscription
            </h1>

            <p className="text-gray-400 text-base text-center max-w-sm">
              If you purchased your subscription through <strong>Stripe</strong>
              , enter the email you used to subscribe. We'll send you a link to
              manage or cancel your plan.
            </p>

            <form
              id="subscriptionForm"
              className="flex flex-col gap-4 w-full max-w-sm text-left"
              autoComplete="off"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  placeholder="you@gmail.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-100 text-black px-6 py-2 rounded-xl hover:bg-gray-800 hover:text-white transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
