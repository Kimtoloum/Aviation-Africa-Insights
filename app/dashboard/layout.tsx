import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/10">

      {/* SIDEBAR */}
      <aside className="w-64 border-r bg-background p-6 space-y-6">

        <h2 className="font-bold text-lg">
          Aviation Insights
        </h2>

        <nav className="space-y-3 text-sm">
          <Link href="/dashboard" className="block hover:text-blue-500">
            Overview
          </Link>

          <Link href="/dashboard/analytics" className="block hover:text-blue-500">
            Analytics
          </Link>

          <Link href="/dashboard/airlines" className="block hover:text-blue-500">
            Airlines
          </Link>

          <Link href="/dashboard/airports" className="block hover:text-blue-500">
            Airports
          </Link>
        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}