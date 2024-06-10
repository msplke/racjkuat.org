import { DashboardHeader } from "~/app/(dashboard)/dashboard/_components/header";
import { DashboardShell } from "~/app/(dashboard)/dashboard/_components/shell";
import { CardSkeleton } from "~/components/card-skeleton";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
