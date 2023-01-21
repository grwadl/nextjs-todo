"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import NavButtons from "./NavButtons";

const paths = [
  {
    name: "Note",
    value: "/",
  },
  {
    name: "New note",
    value: "/new-todo",
  },
  {
    name: "Note",
    value: "/tomorrow",
  },
];

const getFullName = (path: string): string =>
  paths.find((p) => p.value === path)?.name ?? "";

function Header() {
  const path = usePathname();
  const headerTitle = useMemo<string>(() => getFullName(path ?? ""), [path]);
  useEffect(() => {}, [path]);

  return (
    <header className="w-full py-5">
      <div className="padded-section">
        <h3 className="header-title flex items-center justify-center text-2xl font-bold text-blue">
          {headerTitle}
        </h3>
        <NavButtons />
      </div>
    </header>
  );
}

export default Header;
