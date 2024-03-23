import Link from 'next/link';
import Button from '../Button';
import './header.css';
import Image from 'next/image';
export default function Header() {
    return (
        <header className="flex">
          <Image className='icon-menu image' src='/menu-fechado.png' alt='Icone de menu fechado' width={32} height={32}/>
          <Link href="/"><Image className='image' src="/salesforce-logo.svg" alt="Logo Salesforce" width={80} height={100}/></Link>
          <nav className='flex'>
            <ul className="flex nav-header">
              <li><Link href="./products">Produtos</Link></li>
              <li><a href="#">Indústrias</a></li>
              <li><a href="#">Aprendizado</a></li>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Empresa</a></li>
            </ul>

            <div className="header-contact">
              <a href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9">Entre em contato</a>
            </div>

            <img className="language-selector-globe" tabIndex={0} src="/earth-icon.svg"
              alt="icone do globo terreste em linhas pretas" />

            <div className="login">
              <Link className='image' href="/login"><img src="/login-02.webp" alt="Logo de login"/></Link>
              <Link className='text-login' href="/login">Login</Link>
            </div>
            <Button class='small' link="./free-trial" text="Teste Grátis" />
          </nav>
        </header>
    )
}