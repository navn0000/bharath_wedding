import InvitationPage from "@/components/InvitationPage";
import { english } from "@/data/english";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(english);

export default function EnglishPage() {
  return <InvitationPage content={english} />;
}
