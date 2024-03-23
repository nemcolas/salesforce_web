import Image from 'next/image';
import Button from '../../Button';
import './style.css';

function EspecialistaEApps() {
    return (
        <section className='flex container-EspecialistaEApps'>
            <Image width={500} height={500} src="/image-products/appy.svg" alt="Appy, mascote da Salesforce saltitante." className='image' />
            <div className='flex flex-col'>
                <h2>Especialistas e Apps</h2>
                <p>Seu investimento na Salesforce retorna em muito mais do que tecnologia. O Sucesso do Cliente Salesforce proporciona a
                cada cliente o acesso a recursos e à expertise do ecossistema de sucesso mais completo do mundo</p>
                <Button text='Saiba mais' link="https://appexchange.salesforce.com" />
            </div>
        </section>
    );
};

export default EspecialistaEApps;









