import React, { ReactNode } from "react";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>)
    </>
  );
};

export default RootLayout;
