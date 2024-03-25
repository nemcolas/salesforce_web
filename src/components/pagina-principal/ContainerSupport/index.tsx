import Button from '../../Button';
import Image from 'next/image';
import ContainerSupportProps from './interface';
import './style.css';

// Componente responsável por criar um bloco (container) de Suporte
export default function ContainerSupport(props: ContainerSupportProps) {
    return (
        <section className='flex container-suport'>
            <div className='flex flex-col'>
                <h2 className='mb-12'>{props.title}</h2>
                <Button class='large' link='/https://help.salesforce.com/s/?language=pt_BR' text={props.textButton} />
            </div>
            <Image className='imgContainer' src='/image-index/mascote-salesforce.webp' alt={props.altImgContainer} width={400} height={350} />
        </section>
    )

}