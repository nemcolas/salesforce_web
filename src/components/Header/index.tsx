'use client'
import Link from 'next/link';
import Button from '../Button';
import './header.css';
import {mostrarMenu} from '../../functions/menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Componente responsável por criar o header de todas as páginas 
export default function Header() {
  const margimBottom = usePathname() === '/login' ? 'm-0' : ''
  return (
    <header className={"flex " + margimBottom}>
      <Image onClick={mostrarMenu} className='icon-menu image' src='/menu-fechado.png' alt='Icone de menu fechado' width={32} height={32}/>
      
      <Link href="/"><Image className='image' src="/salesforce-logo.svg" alt="Logo Salesforce" width={80} height={100}/></Link>
      <nav className='flex'>
        <ul className="flex nav-header">
          <li><Link href="./products">Produtos</Link></li>
          <li><a href="https://www.salesforce.com/br/solutions/industries/">Indústrias</a></li>
          <li><a href="https://trailhead.salesforce.com/pt-BR">Aprendizado</a></li>
          <li><a href="https://help.salesforce.com/s/">Suporte</a></li>
          <li><a href="https://www.salesforce.com/br/company/our-story/">Empresa</a></li>
          <li><a href="/alunos">Alunos</a></li>
        </ul>

        <section className="login">
          <a className='link-suporte' href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9">Suporte</a>
          <Link className='image' href="/login"><img src="/login-02.webp" alt="Ícone login"/></Link>
          <Link className='text-login' href="/login" lang='en'>Login</Link>
        </section>
        <Button class='small' link="./freetrial" text="Teste Grátis" />
      </nav>
    </header>
)
}