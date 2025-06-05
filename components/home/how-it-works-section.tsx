import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Gradient Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[136.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(40%-38rem)] sm:w-[40.1875rem]"
            style={{
              clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 
                85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 
                60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 
                45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 
                17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 
                74.1% 44.1%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to get your document summarized.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-rose-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.label}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
