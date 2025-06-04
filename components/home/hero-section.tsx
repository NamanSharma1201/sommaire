import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative z-0 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-20 lg:px-12 lg:pb-28 animate-in transition-all">
      {/* Powered by AI */}
      <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-rose-100 via-rose-300 to-rose-500 p-[1px] group transition-all duration-500 ease-in-out hover:from-rose-200 hover:via-rose-400 hover:to-rose-600 animate-gradient-x">
        <Badge className="relative flex items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium text-rose-600 transition-all duration-500 ease-in-out group-hover:bg-rose-50">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <p>Powered by AI</p>
        </Badge>
      </div>

      {/* Headline with highlighted word */}
      <h1 className="py-6 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        Transform PDFs into{" "}
        <span className="relative inline-block px-2">
          <span className="relative z-10">concise</span>
          <span
            className="absolute inset-0 -z-10 -rotate-2 transform rounded-lg bg-rose-200/50 -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        summaries
      </h1>

      {/* Subheading */}
      <h2 className="text-center text-lg text-gray-600 sm:text-xl lg:max-w-4xl lg:px-0 lg:text-2xl">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      {/* CTA Button */}
      <div>
        <Button
          variant="link"
          className="mt-6 rounded-full bg-gradient-to-r from-slate-900 to-rose-500 px-8 py-6 text-base text-white transition-all duration-300 hover:from-rose-500 hover:to-slate-900 sm:px-10 sm:py-7 sm:text-lg lg:mt-16 lg:px-12 lg:py-8 lg:text-xl hover:no-underline"
        >
          <Link href="/#pricing" className="flex items-center gap-2">
            <span>Try Sommaire</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
