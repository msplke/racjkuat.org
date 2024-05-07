import { CardSkeleton } from "~/components/card-skeleton";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

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
