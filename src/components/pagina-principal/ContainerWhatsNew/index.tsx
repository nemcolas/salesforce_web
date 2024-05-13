import CardWhatNew from '../CardWhatNew'
import './style.css'

// Componente responsável por criar um bloco (container) da WhatsNew
export default function ContainerWhatsNew() {
    return (
        <section className='mb-40 containerWhatsNew'>
          <h2 className='text-center'>O que há de novo na Salesforce ?</h2>
          <div className='flex justify-center flex-wrap gap-5'>
          <CardWhatNew
          imgCard='/image-index/data-cloud.webp'
          altImgCard='mascote Genie segurando uma varinha de forma didatica apontada para a pagina da salesforce'
          paragraph='Fortaleça a empresa do seu cliente com dados unificados e em tempo real'
          link='https://www.salesforce.com/br/products/data/'
          textLink='Explore o data Cloud'
        />
        <CardWhatNew
          imgCard='/image-index/find-ia-solution.webp'
          altImgCard='Homem trabalhando e mascote Einsten segurando roda 360 da Salesforce  representando as soluções'
          paragraph='Encontre uma solução de IA adaptada às suas necessidades de negócios'
          link='https://www.salesforce.com/br/products/'
          textLink='Crie seu próprio customer 360'
        />
        <CardWhatNew
          imgCard='/image-index/php-mk-whatsapp-card.webp'
          altImgCard='Mascote Astro saltitante proximo ao logo do Whatsapp'
          paragraph='Marketing no WhatsApp: O que é e como integrar à sua estratégia de marketing digital'
          link='https://www.salesforce.com/br/resources/articles/whatsapp-marketing/'
          textLink='Explore o marketing para WhatsApp'
        />
          </div>
        </section>
      )
}