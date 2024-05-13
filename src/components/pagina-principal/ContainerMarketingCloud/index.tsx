import Button from '@/components/Button';
import Image from 'next/image';
import './style.css';

// Componente responsável por criar um bloco (container) do Marketing Cloud
export default function ContainerMarketingCloud() {
    return (
        <section className='containerMarketingCloud flex flex-wrap mb-40'>
            <div className='flex flex-col content'>
                <h2>Faça cada momento valer a pena para alcançar o sucesso imediato</h2>
                <p>Atraia clientes, gere mais engajamento, construa relações duradouras. Tudo isso graças ao marketing digital baseado em dados</p>
                <Button class='large' link='https://www.salesforce.com/br/products/marketing-cloud/overview/' text='Entenda o marketing cloud' />
            </div>
            <Image className='imgContainer' src='/image-index/sfdc-marketing-cloud-overview-products.png' alt='software de gerenciamento de campanhas de marketing sendo representado em uma tela de dispositivo móvel e desktop' width={400}height={350} />
        </section>
    )
}