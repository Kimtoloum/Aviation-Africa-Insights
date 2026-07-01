export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>

        <p className="text-muted-foreground mt-1">
          African aviation operational intelligence
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-muted-foreground">
          Last updated
        </p>

        <p className="font-medium">
          Today
        </p>
      </div>
    </div>
  );
}