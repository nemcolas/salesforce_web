'use client'
import Link from 'next/link';
import Button from '../Button';
import './header.css';
import { mostrarMenu } from './utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Componente responsável por criar o header de todas as páginas 
export default function Header() {
  const rotaAtual = usePathname()
  const margimBottom = rotaAtual === '/login' ? 'm-0' : ''
  const refImgLogo: any = useRef()
  const linkProdutos: any = useRef()
  const iconeLogin: any = useRef()
  useEffect(() => {
    refImgLogo.current.blur()
    linkProdutos.current.blur()
    if (window.innerWidth <= 650) {
      iconeLogin.current.blur()
    }
  }, [rotaAtual])
  return (
    <header className={"flex " + margimBottom}>

      <Image tabIndex={0} onKeyDown={mostrarMenu} onClick={mostrarMenu} className='icon-menu image' src='/menu-fechado.png' alt='Icone de menu fechado' width={32} height={32} />

      <Link ref={refImgLogo} href="/"><Image className='image' src="/salesforce-logo.svg" alt="Logo Salesforce" width={80} height={100} /></Link>
      <nav className='flex'>
        <ul className="flex nav-header">
          <li><Link ref={linkProdutos} href="./products">Produtos</Link></li>
          <li><Link href="https://www.salesforce.com/br/solutions/industries/">Indústrias</Link></li>
          <li><Link href="https://trailhead.salesforce.com/pt-BR">Aprendizado</Link></li>
          <li><Link href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9">Suporte</Link></li>
          <li><Link href="https://www.salesforce.com/br/company/our-story/">Empresa</Link></li>
        </ul>

        <section>
          <Link className='link-login' ref={iconeLogin} href="/login"><Image className='img-login' width={25} height={25} src='/login-icon.svg' alt='icone de login'/><span className='text-login'>Login</span></Link>
          <Button class='small' link="./freetrial" text="Teste Grátis" />
        </section>
      </nav>
    </header>
  )
}