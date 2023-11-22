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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtiMatch.ai",
  description: "Youe freelancer compass.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChoiceContext>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Providers>
            <div className="page">
              <Nav />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ChoiceContext>
  );
}
