"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//Chakra UI
import { Providers } from "./providers";

//Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

//Contexts
import ChoiceContext from "@/Contexts/Choice/ChoiceContext";
import LoadingContext from "@/Contexts/Loading/LoadingContext";
import Loading from "./Components/Loading/Loading";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ArtiMatch.ai",
//   description: "Youe freelancer compass.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
      const [showLoading, setShowLoading] = useState<boolean>(false);

      // Wrapped in useCallback(), so it can be used as dependency
      // in useEffect() inside MobileMenuProvider.
      // See: https://stackoverflow.com/q/70665603/9413490
      const showLoadingCallback = useCallback((isLoading: boolean) => {
        setShowLoading(isLoading);
      }, []);

  return (
    <LoadingContext showLoadingCallback={showLoadingCallback}>
      <ChoiceContext>
        <html lang="en">
          <body className={`${inter.className}`}>
            {showLoading && <Loading/>}
            <Providers>
              <div className="page">
                {/* <Nav />
                {children}
                <Footer /> */}
                {children}
              </div>
            </Providers>
          </body>
        </html>
      </ChoiceContext>
    </LoadingContext>
  );
}
