import PaywallClient from "./PaywallClient";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function PaywallPage({ params }) {
  const email = decodeURIComponent(params.email);

  return <PaywallClient email={email} />;
}
