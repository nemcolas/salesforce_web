import Image from 'next/image';
import Button from '../../Button';
import '../container-format.css'

// Componente responsável por criar o bloco do produto LearnMorePrices 
function LearnMorePrices() {
    return (
        <section className='flex container-LearnMorePrinces common-container'>
            <Image width={500} height={400} src="/image-products/astro.svg" alt="Astro, mascote da Salesforce utilizando um headset olhando um tablet" className='image'/>
            <div className='flex flex-col justify-around'>
                <h2>Quer saber mais sobre Edição e Preços?</h2>
                <p>Pergunte sobre produtos, preço, implementação ou qualquer outra coisa do Salesforce. Nossos representantes altamente treinados estão à disposição, prontos para ajudar.</p>
                <Button ariaLabel='Saiba mais sobre edições e preços' class='large' text='Saiba mais' link="https://www.salesforce.com/br/form/contact/contactme-pricing/?d=7013y000000ZwBoAAK" />
            </div>
        </section>
    );
};

export default LearnMorePrices;