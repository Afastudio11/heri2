const clients = [
  "ASEAN Indonesia 2023", "Bappenas", "ITDC", "Pertamina Mandalika", "BNI Life", "Bank BRI", "UNESCO"
];

export default function TrustedBy() {
  return (
    <section className="w-full py-8 bg-white border-b border-gray-100" data-testid="section-trusted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-medium">Dipercaya oleh instansi terkemuka</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <span 
                key={i} 
                className="text-gray-400 font-bold text-base md:text-lg tracking-wide hover:text-[#1F68F5] transition-colors cursor-default"
                data-testid={`text-client-${i}`}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
