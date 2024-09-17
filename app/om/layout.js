import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/structure/Header";
import Footer from "@/components/structure/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skjulets sangbok - alle tekstene og historiene.",
  description: "Skjulet er en gjeng kreative musikere og mediamakere fra Halden. Her finner du det meste rundt deres første snarlige utgivelser Historier fra Sofaen!",
}

export default function SongbookLayout({ children }) {
  return (
    <html lang="nb">
      <body className="bg-black">
        <Header />
            <main className="bg-white flex justify-center text-black p-5">
                {children}
            </main>
        <Footer />
      </body>
    </html>
  )
}