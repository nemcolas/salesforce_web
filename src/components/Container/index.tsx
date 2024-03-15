import { containerContentLeftProps, conterinarContentCenterProps } from '../interface/interface';
import Button  from '../Button';
import './style.css';



function ContainerContentLeft(props: containerContentLeftProps) {
  return (
    <section className='flex containerContentLeft justify-between flex-wrap mb-16'>
        <div className='flex flex-col justify-evenly'>
            {props.isHome ? <h1 className='title'>{props.title}</h1> : <h2 className='title'>{props.title}</h2>}
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

function ContainerContentCenter(props: conterinarContentCenterProps) {
  return (
    <section className='mb-44 container-content-center'>
      <h2 className='text-center'>{props.title}</h2>
      <div className='flex justify-center flex-wrap'>
        {props.children}
      </div>
    </section>
  )
}

export { ContainerContentLeft, ContainerContentCenter }
