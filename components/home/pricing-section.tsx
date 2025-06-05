import Link from "next/link";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans: PriceType[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    paymentLink: "#",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "#",
    priceId: "",
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  const isPro = id === "pro";

  return (
    <div
      className={`relative w-full max-w-md p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white mx-auto
      ${
        isPro
          ? "border-2 border-gradient-to-r from-rose-400 to-rose-600 ring-2 ring-rose-200 ring-offset-4"
          : "border border-gray-100 hover:border-gray-200"
      }`}
    >
      {isPro && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-lg text-gray-500 ml-2">/month</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-4 h-4 text-rose-500 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          href={paymentLink}
          className={`inline-block w-full text-center font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1
          ${
            isPro
              ? "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white"
          }`}
        >
          Get Started
        </Link>
        <p className="text-center text-sm text-gray-500 mt-4">
          No setup fees • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-4">
            Pricing Plans
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the plan that best fits your needs and start transforming
            your PDF workflow today
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-12">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold transition-colors duration-200"
          >
            Contact our sales team
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
