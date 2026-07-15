"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuOverlay from "./MenuOverlay";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}