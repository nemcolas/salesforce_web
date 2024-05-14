import Button from '../../Button';
import Customer360CardProps from './interface';
import './style.css';

// Componente responsável por criar o bloco do produto Costumer360 
function Customer360(props: Customer360CardProps) {
    return (
        <section className='flex container-customer360 product-section'>
            <div className='flex flex-col gap-10'>
                <h1 lang='en'>{props.title}</h1>
                <p>{props.paragraph}</p>
                <Button ariaLabel='Saiba mais sobre o produto principal' class='buttonContainer small' text='Saiba mais' link={props.link} />
            </div>
            <picture className='imgCustomer360'>
                <source className='imgMobile' media="(max-width: 950px)" srcSet="/image-products/customer-768.webp" />
                <img src="/image-products/customer360-products.webp" alt="Imagem do produto Customer 360 com uma mulher e um fundo com uma floresta e algumas arvores" />
            </picture>
        </section>
    );
};
export default Customer360;