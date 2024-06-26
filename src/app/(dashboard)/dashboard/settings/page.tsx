import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { DashboardHeader } from "~/app/(dashboard)/dashboard/_components/header";
import { DashboardShell } from "~/app/(dashboard)/dashboard/_components/shell";

// import { UserNameForm } from "~/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const { userId } = auth();

  if (!userId) redirect("/login");

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        {/* <UserNameForm user={{ id: user.id, name: user.name || "" }} /> */}
      </div>
    </DashboardShell>
  );
}
