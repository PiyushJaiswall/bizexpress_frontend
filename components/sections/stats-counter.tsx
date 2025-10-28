"use client";

export function StatsCounter() {
  const stats = [
    { label: "Clients Served", value: "10,000+", },
    { label: "Companies Incorporated", value: "5,000+", },
    { label: "GST Registrations", value: "8,000+", },
    { label: "Funds Raised", value: "₹500Cr+", },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
