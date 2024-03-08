import {ContainerContentLeftProps} from '../components/Container';
import './homepage.css'

export default function Home() {
  return (
    <main>
      <ContainerContentLeftProps
        textHeader='Entregue sucesso agora com o Salesforce Customer 360'
        textParagraph='O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.'
        linkButton='/free-trial'
        textButton= 'Teste grátis' 
        imgContainer='/customer360.webp'
        altImgContainer='mulher sorrindo com o mascote Einstem em sua frente dentro da roda do customer 360'
        >
        <a className='ml-10 px-8 py-3.5 border-slate-600 border-solid border-y border-x text-xl no-underline rounded-md' href="https://www.salesforce.com/br/products/">Saiba mais</a>
      </ContainerContentLeftProps>

      <h2 className='align-center'>O que há de novo na Salesforce ?</h2>
    </main>  
  );
}
