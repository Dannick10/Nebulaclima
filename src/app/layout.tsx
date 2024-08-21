import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NebulaClima",
  description: "NebulaClima é uma aplicação intuitiva e elegante que oferece previsões meteorológicas detalhadas em um ambiente visualmente impactante. Explore as condições climáticas de diversas localidades através de animações imersivas e uma interface escura sofisticada. Perfeito para quem busca informações precisas sobre o tempo com um toque de mistério e estilo.",
  keywords: "NebulaClima,previsão do tempo, meteorologia, clima, API de clima, estados do Brasil, tempo em Aracaju, previsão detalhada, Frame Motion, Daisy UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
