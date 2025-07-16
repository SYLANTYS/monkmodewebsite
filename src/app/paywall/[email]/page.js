import PaywallClient from "./PaywallClient";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

function UserLoadingFallback() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default async function PaywallPage({ params }) {
  const email = decodeURIComponent(params.email);

  let user = null;
  let error = null;

  // Timeout logic: abort after 30 seconds
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const { data, error: listError } =
      await supabaseAdmin.auth.admin.listUsers();
    error = listError;
    if (!error) {
      user = data.users.find((u) => u.email === email);
    }
  } catch (err) {
    console.error("Timeout or other error:", err);
  } finally {
    clearTimeout(timeout);
  }

  if (!user) {
    return <UserLoadingFallback />;
  }

  console.log("Supabase Auth User:", user.id);
  return <PaywallClient email={email} userId={user.id} />;
}
