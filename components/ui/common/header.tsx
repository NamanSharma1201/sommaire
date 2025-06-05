import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="relative container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
      <div className="flex items-center gap-2">
        <NavLink href="/" className="flex items-center gap-2">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold text-gray-900 lg:text-xl">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavLink href="/#pricing">Pricing</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
          <div className="flex items-center gap-3">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium text-gray-500">Pro</div>
              <UserButton />
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <NavLink href="/sign-in">Sign In</NavLink>
        </SignedOut>
      </div>
    </nav>
  );
}
