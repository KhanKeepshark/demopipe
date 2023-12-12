import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import { FC, ReactElement } from "react";

export const MainLayout: FC<{
  children: ReactElement;
}> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
