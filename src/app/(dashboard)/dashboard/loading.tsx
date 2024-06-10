import { DashboardHeader } from "~/app/(dashboard)/dashboard/_components/header";
import { DashboardShell } from "~/app/(dashboard)/dashboard/_components/shell";
import { CardSkeleton } from "~/components/card-skeleton";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        {/* <PostCreateButton /> */}
      </DashboardHeader>

      <div className="divide-border-200 divide-y rounded-md border">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
