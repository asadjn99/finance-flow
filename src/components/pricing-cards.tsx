// import { Check } from "lucide-react";

// Data for the pricing plans
const pricingPlans = [
  {
    name: "BASIC",
    price: "99 USD",
    description: "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    name: "PRO",
    price: "149 USD",
    description: "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    name: "EXPERT",
    price: "199 USD",
    description: "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
];

export function PricingCards() {
  return (
    <section className="relative pb-20 lg:pb-32 pt-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#1A1B1A] rounded-[2.5rem] p-8 md:p-10 flex flex-col border border-white/5 hover:border-white/10 transition-colors duration-300 group"
            >
              {/* Plan Badge */}
              <div className="mb-6">
                <span className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest inline-block">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-white font-bold text-4xl lg:text-5xl tracking-tight">
                  $ {plan.price}
                </span>
              </div>

              {/* Description with divider */}
              <p className="text-gray-400 text-sm leading-relaxed mb-10 pb-10 border-b border-white/10">
                {plan.description}
              </p>

              {/* Features Section */}
              <div className="flex-grow">
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">
                  FEATURES
                </h4>
                <ul className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                      {/* Custom Green Dot Bullet Point */}
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(136,183,2,0.6)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full bg-primary text-white py-4 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#050605] hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-primary/20 ">
                CONTACT US
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}