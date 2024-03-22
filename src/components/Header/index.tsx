import Link from 'next/link';
import Button from '../Button';
import './header.css';
export default function Header() {
    return (
        <header className="flex">
          <Link href="/"><img src="/salesforce-logo.svg" alt="Logo Salesforce" /></Link>
          <nav >
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
            <Button class='medium' link="./free-trial" text="Teste Grátis" />
          </nav>
        </header>
    )
}