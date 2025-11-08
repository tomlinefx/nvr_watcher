import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <span className="font-bold text-2xl text-blue-600">
            Sirius Denkou
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            className="font-medium text-gray-700 text-sm transition-colors hover:text-blue-600"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="font-medium text-gray-700 text-sm transition-colors hover:text-blue-600"
            href="#contact"
          >
            Contact
          </Link>

          {/* My Page Button */}
          <Button asChild size="sm" variant="outline">
            <Link className="flex items-center gap-2" href="/mypage">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">My Page</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
