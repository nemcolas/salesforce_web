import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Chatbot from '../components/Chatbot';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Domine a jornada do seu cliente desde o primeiro contato até o pós-venda com a Salesforce, a plataforma líder mundial em CRM",
  icons: {
    icon: ['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Head>
        {/* <script src="https://unpkg.com/watson-speech@0.40.0/dist/watson-speech.min.js"></script> */}
        </Head>
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
