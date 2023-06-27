import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { inter, bebas_neue } from "./fonts";
import LoaderPage from "@/components/LoaderPage";
import Head from "next/head";

export const metadata = {
  title: "Alison´s Portifolio",
  description: "Veja os projetos que atuei e minha habilidade aplicadas",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

      <body className={`${inter.variable} ${bebas_neue.variable} font-sans`}>
        <LoaderPage />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
