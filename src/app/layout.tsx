import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Chatbot from '../components/Chatbot';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Domine a jornada do seu cliente desde o primeiro contato até o pós-venda com a Salesforce, a plataforma líder mundial em CRM, atendimento ao cliente e marketing digital",
  icons: {
    icon:['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      </Head>
      <body>
        <Header/>
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
