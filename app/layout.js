import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skjulet - historiefortellende musikkmoro fra Halden",
  description: "Skjulet er en gjeng kreative musikere og mediamakere fra Halden. Her finner du det meste rundt deres første snarlige utgivelser Historier fra Sofaen!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
