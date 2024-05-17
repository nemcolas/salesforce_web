import ContainerMarketingCloud from '@/components/pagina-principal/ContainerMarketingCloud';
import Customer360 from '@/components/pagina-principal/Customer360';
import ContainerEventosOnline from '../components/pagina-principal/ContainerEventosOnline';
import ContainerFreeTrial from '../components/pagina-principal/ContainerFreeTrial';
import ContainerOqueECrm from '../components/pagina-principal/ContainerOqueECrm';
import ContainerSupport from '../components/pagina-principal/ContainerSupport';
import ContainerTrailblazers from '../components/pagina-principal/ContainerTrailblazers';
import ContainerWhatsNew from '../components/pagina-principal/ContainerWhatsNew';
import NossosClientes from '../components/pagina-principal/NossosClientes';
import ContainerNossosProdutos from '../components/pagina-principal/NossosProdutos';
import '../style/homepage.css';

export default function Home() {
  return (
    <main className='homepage'>
      <Customer360 />

      <ContainerWhatsNew />

      <ContainerNossosProdutos />

      <NossosClientes />

      <ContainerOqueECrm />

      <ContainerEventosOnline />

      <ContainerTrailblazers title='Cresça com uma comunidade de companheiros: Trailblazers'
        textParagraph='Domine o CRM para integrar equipes, impulsionando o crescimento e a produtividade em sua empresa'
        textButton='Conecte-se com os Traiblazers'
        linkButton='https://trailhead.salesforce.com/'
        altImgContainer='Mulher com camisa do Trailhead, círculo roxo ao fundo, Einstein ao lado com as mãos erguidas.'
      />

      <ContainerMarketingCloud />

      <ContainerFreeTrial title='Experimente a Salesforce gratuitamente' 
        subTitle='Não é necessario cartão de crédito ou instalar softwares externos'
        textButton='Iniciar Teste Gratuito'
        altImgContainer='Exemplo do Sales Cloud: pop-ups mostram gerenciamento de contatos, automação e oportunidades'
      />

    <ContainerSupport title={'Ainda tem dúvidas? Podemos ajudar e te direcionar para o caminho certo!'} 
    altImgContainer='Astro, o mascote principal da Salesforce acenando com a mão'
    textButton='Entre em contato conosco'
    />
    </main>
  );
}
