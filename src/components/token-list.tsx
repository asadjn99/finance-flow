import { Bitcoin, CircleDollarSign, Zap, Activity } from "lucide-react";

const tokens = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    description: "Bitcoin (BTC) is the original and most well-known decentralized digital currency that operates without a central bank or government.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    icon: Bitcoin, // Using Lucide Bitcoin icon
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    description: "Ethereum (ETH) is a decentralized, open-source blockchain platform known for enabling smart contracts and decentralized applications (dApps) without intermediaries.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    icon: CircleDollarSign, // Placeholder for ETH
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    description: "Litecoin (LTC) is a peer-to-peer cryptocurrency created by Charlie Lee in 2011.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    icon: Zap, // Placeholder for LTC
  },
  {
    name: "TRON",
    symbol: "TRX",
    description: "Tron refers to a popular media franchise centered on a digital world",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    icon: Activity, // Placeholder for TRX
  },
];

export function TokenList() {
  return (
    <section className="relative pb-20 lg:pb-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Responsive Table Wrapper 
            overflow-x-auto allows the table to scroll horizontally on small screens
        */}
        <div className="w-full overflow-x-auto pb-6">
          <table className="w-full min-w-[1000px] text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-6 text-xs font-bold tracking-widest text-white uppercase w-[20%]">Name</th>
                <th className="py-6 text-xs font-bold tracking-widest text-white uppercase w-[30%]">Description</th>
                <th className="py-6 text-xs font-bold tracking-widest text-white uppercase w-[20%]">Market Cap</th>
                <th className="py-6 text-xs font-bold tracking-widest text-white uppercase w-[20%]">Volume</th>
                <th className="py-6 text-xs font-bold tracking-widest text-white uppercase w-[10%]">Website</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {tokens.map((token, index) => (
                <tr key={index} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  
                  {/* Name Column */}
                  <td className="py-8 pr-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <token.icon size={24} />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold text-lg">{token.name}</span>
                        <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                          {token.symbol}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Description Column */}
                  <td className="py-8 pr-8">
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      {token.description}
                    </p>
                  </td>

                  {/* Market Cap Column */}
                  <td className="py-8 pr-4">
                    <span className="text-white font-bold font-mono">
                      {token.marketCap}
                    </span>
                  </td>

                  {/* Volume Column */}
                  <td className="py-8 pr-4">
                     <span className="text-white font-bold font-mono">
                      {token.volume}
                    </span>
                  </td>

                  {/* Website Column */}
                  <td className="py-8">
                    <a href="#" className="inline-flex items-center gap-1 text-gray-400 hover:text-primary transition-colors text-sm border-b border-gray-600 hover:border-primary pb-0.5">
                      Visit Website
                      {/* Optional external link icon if desired, though image shows simple text link */}
                      {/* <ArrowUpRight size={14} /> */}
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}