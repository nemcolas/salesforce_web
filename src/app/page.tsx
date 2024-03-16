import { ContainerContentLeft, ContainerContentCenter } from '../components/Container';
import Cards from '../components/Cards/CardWhatNew';
import CardOurProducts from '../components/Cards/OurProducts';
import CardOurClients  from '../components/Cards/OurClients';
import '../style/homepage.css'
import '../i18n'

export default function Home() {
  return (
    <main>
      <ContainerContentLeft title='Entregue sucesso agora com o Salesforce Customer 360'
        textParagraph='O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.' linkButton='/free-trial' textButton='Teste grátis'
        imgContainer='/customer360.webp'
        altImgContainer='mulher sorrindo com o mascote Einstem em sua frente dentro da roda do customer 360'
        isHome={true}
      >
        <a className='ml-10 px-8 py-3.5 border-slate-600 border-solid border-y border-x text-xl no-underline rounded-md text-sky-600' href="https://www.salesforce.com/br/products/">Saiba mais</a>
      </ContainerContentLeft>

      <ContainerContentCenter title='O que há de novo na Salesforce ?'>
        <Cards
          imgCard='/image-index/data-cloud.webp'
          altImgCard='mascote Genie segurando uma varinha de forma didatica apontada para a pagina da salesforce'
          paragraph='Fortaleça a empresa do seu cliente com dados unificados e em tempo real'
          link='https://www.salesforce.com/br/products/data/'
          textLink='Explore o data Cloud'
        />
        <Cards
          imgCard='/image-index/find-ia-solution.webp'
          altImgCard='Homem trabalhando e mascote Einsten segurando roda 360 da Salesforce  representando as soluções'
          paragraph='Encontre uma solução de IA adaptada às suas necessidades de negócios'
          link='https://www.salesforce.com/br/products/'
          textLink='Crie seu próprio customer 360'
        />
        <Cards
          imgCard='/image-index/php-mk-whatsapp-card.webp'
          altImgCard='Mascote Astro saltitante proximo ao logo do Whatsapp'
          paragraph='Marketing no WhatsApp: O que é e como integrar à sua estratégia de marketing digital'
          link='https://www.salesforce.com/br/resources/articles/whatsapp-marketing/'
          textLink='Explore o marketing para WhatsApp'
        />
      </ContainerContentCenter>

      <ContainerContentCenter title='Nossos produtos são feitos para você'>
        <CardOurProducts
          title='Pequenas empresas'
          paragraph='Venda de forma inteligente e forneça suporte rápido em um só app'
          img='/image-index/php-products-small-business.webp'
          alt='homem com camisa listrada sorrindo com um fundo azul'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
        />
        <CardOurProducts
          title='Atendimento'
          paragraph='Gaste menos com serviços escaláveis que os clientes adoram'
          img='/image-index/php-products-service-generic.webp'
          alt='homem com camisa rosa e um fone com a mão na orelha sorrindo em um fundo rosa'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
        />

        <CardOurProducts
          title='Vendas' paragraph='Feche mais negócios e acelere o crescimento com o CRM nº1'
          img='/image-index/php-products-sales-generic.webp'
          alt='mulher com cabelo grisalho, com camisa de botão com um tom de verde e uma pasta na mão sorrindo'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
        />
      </ContainerContentCenter>

      <ContainerContentCenter title='Nossos clientes'>
        <CardOurClients title='Sumup' img='/image-index/sumup-customers-home.webp' alt='logo da empresa Sumup com flores e arbustos ao fundo' paragraph='Serviços Finaceiros' link='https://www.salesforce.com/br/customer-success-stories/sumup/'/>

        <CardOurClients title='Gympass' img='/image-index/gympass-customers-home.webp' alt='logo da empresa Gympass com flores e arbustos ao fundo' paragraph='Saúde' link='https://www.salesforce.com/br/customer-success-stories/gympass/'/>

        <CardOurClients title='Vipal Borrachas' img='/image-index/vipal-customers-home.webp' alt='logo da empresa Vipal com flores e arbustos ao fundo' paragraph='Manufatura' link='https://www.salesforce.com/br/customer-success-stories/vipal-borrachas/'/>

        <CardOurClients title='Grupo Tigre' img='/image-index/tigre-customers-home.webp' alt='logo da empresa Grupo Tigre com flores e arbustos ao fundo' paragraph='Construção civil' link='https://www.salesforce.com/br/customer-success-stories/grupo-tigre/'/>
      </ContainerContentCenter>


      <ContainerContentLeft title='O que é CRM ?'
        textParagraph='Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa'
        linkButton='https://www.salesforce.com/br/crm/'
        imgContainer='/image-index/php-rc-what-is-crm.webp'
        altImgContainer='Mascote Astro apresentando funcionalidades do Sales Cloud'
        textButton='Saiba Mais'
      />

      <ContainerContentCenter title='Eventos online e aprendizado Salesforce'>

      </ContainerContentCenter>
    </main>
  );
}
