import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../style/header.css";
import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Domine a jornada do seu cliente desde o primeiro contato até o pós-venda com a Salesforce, a plataforma líder mundial em CRM, atendimento ao cliente e marketing digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="flex">
          <Link href="/"><img src="/salesforce-logo.svg" alt="Logo Salesforce" /></Link>
          <nav>
            <ul className="flex">
              <li><Link href="./products">Produtos</Link></li>
              <li><a href="#">Indústrias</a></li>
              <li><a href="#">Aprendizado</a></li>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Empresa</a></li>
            </ul>

            <div className="header-contact">
              <a href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9">Entre em contato</a>
              <p>0800 891 1887</p>
            </div>

            <img className="language-selector-globe" tabIndex={0} src="/earth-icon.svg"
              alt="icone do globo terreste em linhas pretas" />

            <div className="login">
              <Link href="/login"><img src="/login-02.webp" alt="Logo de login"/></Link>
              <Link href="/login">Login</Link>
            </div>
            <Button link="./free-trial" text="Teste Grátis" />
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
