'use client'

const regulators = ['FCA', 'ASIC', 'FSCA', 'CySEC', 'DFSA']

export default function TrustBar() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 flex flex-col items-center gap-8">
          <p className="text-gray-500 text-xs font-bold tracking-[0.3em] text-center uppercase">
            TRUSTED BY TRADERS. REGULATED BY AUTHORITIES.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {regulators.map((reg) => (
              <div key={reg} className="text-white/40 font-black text-2xl lg:text-3xl tracking-tighter hover:text-white/80 transition-colors cursor-default">
                {reg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

