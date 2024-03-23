import '../style/homepage.css'
import { ContainerContentLeft, ContainerContentCenter } from '../components/Container';
import Cards from '../components/Cards/CardWhatNew';
import CardOurProducts from '../components/Cards/OurProducts';
import CardOurClients from '../components/Cards/OurClients';
import CardsOurEvents from '../components/Cards/OurEvents';
import ContainerTrailblazers from '../components/pagina-principal/ContainerTrailblazers';
import ContainerSupport from '../components/pagina-principal/ContainerSupport'
import ContainerFreeTrial from '../components/pagina-principal/ContainerFreeTrial'

export default function Home() {
  return (
    <main className='homepage'>
      <ContainerContentLeft title='Entregue sucesso agora com o Salesforce Customer 360'
        textParagraph='O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.' linkButton='/free-trial' textButton='Teste grátis'
        imgContainer='/customer360.webp'
        altImgContainer='mulher sorrindo com o mascote Einstem em sua frente dentro da roda do customer 360'
        isHome={true}
        btnClasses='medium'
      >
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
        <CardOurClients title='Sumup' img='/image-index/sumup-customers-home.webp' alt='logo da empresa Sumup com flores e arbustos ao fundo' paragraph='Serviços Finaceiros' link='https://www.salesforce.com/br/customer-success-stories/sumup/' />

        <CardOurClients title='Gympass' img='/image-index/gympass-customers-home.webp' alt='logo da empresa Gympass com flores e arbustos ao fundo' paragraph='Saúde' link='https://www.salesforce.com/br/customer-success-stories/gympass/' />

        <CardOurClients title='Vipal Borrachas' img='/image-index/vipal-customers-home.webp' alt='logo da empresa Vipal com flores e arbustos ao fundo' paragraph='Manufatura' link='https://www.salesforce.com/br/customer-success-stories/vipal-borrachas/' />

        <CardOurClients title='Grupo Tigre' img='/image-index/tigre-customers-home.webp' alt='logo da empresa Grupo Tigre com flores e arbustos ao fundo' paragraph='Construção civil' link='https://www.salesforce.com/br/customer-success-stories/grupo-tigre/' />
      </ContainerContentCenter>

      <ContainerContentLeft title='O que é CRM ?'
        textParagraph='Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa'
        linkButton='https://www.salesforce.com/br/crm/'
        imgContainer='/image-index/php-rc-what-is-crm.webp'
        altImgContainer='Mascote Astro apresentando funcionalidades do Sales Cloud'
        textButton='Saiba Mais'
        classes='ml-7'
        btnClasses='medium'
      />

      <ContainerContentCenter title='Eventos online e aprendizado Salesforce'>
        <CardsOurEvents img='/image-index/home-news-bar-evergreen-events.webp' alt='pessoas sorridentes batendo palma em um fundo de nuvem' paragraphTop='Eventos'
          paragraph='Mergulhe em paixão, aprendizado e conhecimento' bottomLinkText='Explore os eventos' bottomLink='https://www.salesforce.com/br/events/' />

        <CardsOurEvents img='/image-index/php-sf-blog.webp' alt='Astro acenando com uma bengala na mao a frente de uma floresta' paragraphTop='Blog'
          paragraph='Aprenda tudo sobre o Customer 360 em workshops práticos(Inglês)' bottomLinkText='Saiba mais' bottomLink='https://cs.salesforce.com/?_ga=2.246456652.970257102.1710510944-2068240218.1707590733' />

        <CardsOurEvents img='/image-index/salesforce-inteligencia-artificial.webp' alt='Einstein atras de uma mesa com livros em cima dela, e mostrando calculos na lousa ao fundo' paragraphTop='Webinars'
          paragraph='Descubra como impulsionar o crescimento com o Salesforce gratuitamente' bottomLinkText='Assista aos webinars' bottomLink='https://www.salesforce.com/br/resources/webinars/?d=cta-events-3-ungated-webinars#!page=1' />
      </ContainerContentCenter>


      <ContainerTrailblazers title='Cresça com uma comunidade de companheiros Trailblazers'
        textParagraph='Domine o CRM para integrar equipes, impulsionando o crescimento e a produtividade em sua empresa'
        textButton='Conecte-se com os Traiblazers'
        linkButton='https://trailhead.salesforce.com/'
        altImgContainer='Mulher com a camisa do Trailhead com um circulo roxo ao fundo e o Einstein ao lado dela com as mãos para cima'
      />

      <ContainerContentLeft title='Faça cada momento valer a pena para alcançar o sucesso imediato'
        textParagraph='Atraia clientes. Gere mais engajamento.Construa relações duradouras.Tudo isso graças ao marketing digital baseado em dados'
        textButton='Entenda o marketing cloud'
        linkButton='https://www.salesforce.com/br/products/marketing-cloud/overview/'
        imgContainer='/image-index/sfdc-marketing-cloud-overview-products.png'
        altImgContainer='software de atendimento ao cliente sendo representado em uma tela de dispositivo móvel e desktop'
        imgClasses='order-first'
        classes='imgRight'
        btnClasses='large'
      />

      <ContainerFreeTrial title='Experimente a Salesforce gratuitamente' 
        subTitle='Não é necessario cartão de crédito nem instalar nenhum software'
        textButton='Iniciar Teste Gratuito'
        altImgContainer='exemplo do Sales Cloud apresentado por três pop ups representando gerenciamento de contatos, automação de fluxo de trabalho e gerenciamento de oportunidades'
      />

    <ContainerSupport title={`Ainda tem duvidas ? Podemos ajudar e direcionar você para o caminho certo`} 
    altImgContainer='Astro, o mascote principal da Salesforce acenando com a mão'
    textButton='Entrar em contato'
    />
    </main>
  );
}
