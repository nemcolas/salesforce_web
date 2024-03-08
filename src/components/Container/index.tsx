'use client'
import { containerContentLeftProps } from '../interface/interface';
import Button  from '../Button';
import './style.css';
import { usePathname } from 'next/navigation';


function ContainerContentLeftProps(props: containerContentLeftProps) {
  return (
    <section className='flex containerContentLeft justify-between flex-wrap'>
        <div className='flex flex-col justify-evenly'>
            {usePathname() === '/' ? <h1 className='title'>{props.textHeader}</h1> : <h2 className='title'>{props.textHeader}</h2>}
            <p>{props.textParagraph}</p>
            <div>
              <Button link={props.linkButton} text={props.textButton}/>
              {props.children}
            </div>
        </div>
        <img src={props.imgContainer} alt={props.altImgContainer} />
    </section>
  )
}

export { ContainerContentLeftProps }
