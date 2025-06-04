"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-gray-600 transition-colors duration-200 hover:text-rose-500",
        className,
        isActive && "text-rose-500 font-medium"
      )}
    >
      {children}
    </Link>
  );
}
