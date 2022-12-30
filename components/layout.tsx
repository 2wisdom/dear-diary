import React from "react";
import Navbar from "./Navbar";

interface Parameter {
  children: React.ReactNode;
}

export default function Layout({ children }: Parameter) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
