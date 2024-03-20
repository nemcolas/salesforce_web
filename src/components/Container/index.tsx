import { containerContentLeftProps, conterinarContentCenterProps } from '../interface/interface';
import Button  from '../Button';
import './style.css';
import Image from 'next/image';

function ContainerContentLeft({isHome = false, ...props}: containerContentLeftProps) {
  return (
    <section className={'flex containerContentLeft justify-between flex-wrap ' + (isHome ? 'mb-24' : 'mb-40')}>
        <div className={'flex flex-col justify-evenly ' + props.classes}>
            {isHome ? <h1 className='title'>{props.title}</h1> : <h2 className='title'>{props.title}</h2>}
            <p>{props.textParagraph}</p>
            <div>
              <Button link={props.linkButton} text={props.textButton}/>
              {props.children}
            </div>
        </div>
        <Image className={`containerContentLeftImg ${props.imgClasses} ${props.classes}` } src={props.imgContainer} alt={props.altImgContainer} width={700} height={600}/>
    </section>
  )
}

function ContainerContentCenter(props: conterinarContentCenterProps) {
  return (
    <section className='mb-40 container-content-center'>
      <h2 className='text-center'>{props.title}</h2>
      <div className='flex justify-center flex-wrap'>
        {props.children}
      </div>
    </section>
  )
}

export { ContainerContentLeft, ContainerContentCenter }
