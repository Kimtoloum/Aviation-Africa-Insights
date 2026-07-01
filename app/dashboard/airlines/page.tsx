export default function AirlinesPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Airlines Performance
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-6 border rounded-xl bg-background">
          Ethiopian Airlines
        </div>

        <div className="p-6 border rounded-xl bg-background">
          Air Côte d'Ivoire
        </div>

        <div className="p-6 border rounded-xl bg-background">
          Royal Air Maroc
        </div>

        <div className="p-6 border rounded-xl bg-background">
          Kenya Airways
        </div>

      </div>

    </div>
  );
}