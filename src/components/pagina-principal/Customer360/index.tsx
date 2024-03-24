import Image from 'next/image';
import Button from '@/components/Button';
import './style.css';
export default function Customer360() {
  return (
    <section className='customer360 flex justify-between flex-wrap'>
        <div className='flex flex-col justify-evenly content'>
            <h1>
                Entregue sucesso agora com o Salesforce Customer 360
            </h1>
            <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.</p>
            <div className='flex flex-wrap gap-5 buttons'>
              <Button class='small' link='/free-trial' text='Teste Grátis'/>
              <a className='btnSaibaMaisHome'>Saiba Mais</a>
          </div>
        </div>
        <Image className='imageCustomer360' src='/customer360.webp' alt='mulher sorrindo com o mascote Einstem em sua frente dentro da roda do customer 360' width={700} height={600}/>
    </section>
  );
}