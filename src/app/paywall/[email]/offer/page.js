import OfferClient from "./OfferClient";

export default async function OfferPage(params) {
  const email = decodeURIComponent(params.email);

  return <OfferClient email={email} />;
}
