import Image from 'next/image'
import Button from '../../Button'
import './style.css'

// Componente responsável por criar um bloco (container) sobre OqueECrm
export default function ContainerOqueECrm() {
    return (
        <section className='containerOqueECrm flex flex-wrap'>
        <div className='flex'>
            <h2>
                O que é CRM ?
            </h2>
            <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
            <Button ariaLabel='Saiba mais sobre CRM' class='medium' link='https://www.salesforce.com/br/crm/' text='Saiba Mais'/>
        </div>
        <Image className='imageOqueECrm' src='/image-index/php-rc-what-is-crm.webp' alt='Mascote Astro apresentando funcionalidades do Sales Cloud' width={700} height={400}/>
    </section>
      )
}