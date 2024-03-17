import ContainerTrailblazersProps from './interface';
import Image from 'next/image';
import ButtonLarge from '../../ButtonLarge';
import './style.css';
export default function ContainerTrailblazers(props: ContainerTrailblazersProps) {
    return (
        <section className='container-trailblazer flex flex-wrap mb-40'>
            <div className='flex flex-col'>
                <h2>{props.title}</h2>
                <p>{props.textParagraph}</p>
                <ButtonLarge link={props.linkButton} text={props.textButton} />
            </div>
            <Image className='imgContainer containerContentLeftImg' src='/image-index/be-a-trailblazer.webp' alt={props.altImgContainer} width={400}height={350} />
        </section>
    )
}