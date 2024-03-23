import Image from 'next/image';
import Button from '../../Button';

function LearnMorePrices() {
    return (
        <section className='flex container-LearnMorePrinces'>
            <Image width={500} height={500} src="/image-products/astro.svg" alt="Astro, mascote da Salesforce utilizando um headset olhando um tablet, ao fundo alguns quadros de paisagens.  " className='image' />
            <div className='flex flex-col'>
                <h2>Quer saber mais sobre Edição e Preços?</h2>
                <p>Pergunte sobre produtos, preço, implementação ou qualquer outra coisa do Salesforce. Nossos representantes altamente treinados estão à disposição, prontos para ajudar.</p>
                <Button text='Saiba mais' link="https://appexchange.salesforce.com" />
            </div>
        </section>
    );
};

export default LearnMorePrices;