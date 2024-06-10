import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { DashboardHeader } from "~/app/(dashboard)/dashboard/_components/header";
import { DashboardShell } from "~/app/(dashboard)/dashboard/_components/shell";
import { EmptyPlaceholder } from "~/components/empty-placeholder";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) redirect("/login");

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        {/* <PostCreateButton /> */}
      </DashboardHeader>

      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any posts yet. Start creating content.
          </EmptyPlaceholder.Description>
          {/* <PostCreateButton variant="outline" /> */}
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}
