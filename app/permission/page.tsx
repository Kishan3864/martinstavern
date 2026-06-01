import type { Metadata } from "next";
import PermissionPanel from "@/components/admin/PermissionPanel";

// Keep this page out of search engines and link previews.
export const metadata: Metadata = {
  title: "Site Control",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default function PermissionPage() {
  return <PermissionPanel />;
}
