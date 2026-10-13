import InvitationPage from "@/components/InvitationPage";
import { tamil } from "@/data/tamil";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(tamil);

export default function TamilPage() {
  return <InvitationPage content={tamil} />;
}
