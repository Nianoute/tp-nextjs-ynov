"use client";
import Logo from "@/components/ui/Logo";
import Login from "@/components/ui/Login";

export default function Header() {

  return (
    <header className="flex items-center gap-5 py-8 px-6 bg-blue-700">
        <Logo />
        <Login />
    </header>
  );
}
