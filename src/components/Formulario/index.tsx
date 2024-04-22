'use client'
import { useEffect, useState } from 'react'
import {enviarTesteGratis} from './funcoes'
import {emailRegex, telefoneRegex} from '@/utils'

//Componente responsável pelo formulário da página de teste grátis.
export default function Formulario() {
    const [disabled, setDisabled] = useState(true)

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        position: '',
        emailCorporate: '',
        phone: ''
    })
    const [aceitaTermos, setAceitaTermos] = useState()

    const [selects, setSelect] = useState({
        country: '',
        sizeCompany: '',
        languague: '',
    })

    function changeTermos(e: any) {
        setAceitaTermos(e.target.checked)
    }

    function changeSelect(type: string, valueTarget: any) {
            setSelect({
                ...selects,
                [type]: valueTarget
            })       
    }

    function changeState(type: string, valueTarget: string) {
        setForm({
            ...form,
            [type] : valueTarget
        })
    }

    useEffect(() =>{
        if (form.name.length < 3 
            || form.lastName.length < 3 
            || form.position.length < 3
            || !emailRegex.test(form.emailCorporate)
            || !telefoneRegex.test(form.phone)
            || selects.country == ''
            || selects.languague == ''
            || selects.sizeCompany == ''
            || !aceitaTermos) { 
                setDisabled(true) 
            }else {
                setDisabled(false)
            }    
    }, [form, selects, aceitaTermos])

    return ( <form className='flex flex-col'>
    <div className='flex justify-between gap-5'>
        <div className='flex flex-col'>
            <label htmlFor="name">Nome:</label>
            <input onChange={(e) => {changeState('name', e.target.value)}} className='text' type="text" name="name" id="name" placeholder="Nome" value={form.name} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input onChange={(e) => {changeState('lastName', e.target.value)}} className='flex-1 text' type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" value={form.lastName} />
        </div>
    </div>
    <label htmlFor="cargo">Cargo:</label>
    <input onChange={(e) => {changeState('position', e.target.value)}} className='text' type="text" name="cargo" id="cargo" placeholder="Cargo" value={form.position} />
    <label htmlFor="email corporativo">Email corporativo:</label>
    <input onChange={(e) => {changeState('emailCorporate', e.target.value)}} className='text' type="email" name="email corporativo" id="email corporativo" placeholder="Email corporativo" value={form.emailCorporate} />
    <label htmlFor="telefone">Telefone:</label>
    <input onChange={(e) => {changeState('phone', e.target.value)}} className='text' type="tel" name="telefone" id="telefone" placeholder="Telefone" value={form.phone} />
    <label htmlFor="tamanho da empresa">Tamanho da empresa:</label>
    <select value={selects.sizeCompany} onChange={(e) => changeSelect('sizeCompany', e.target.value)} name="tamanho da empresa" id="tamanho da empresa" required>
        <option className='text-slate-300' value="" disabled selected>Tamanho da empresa</option>
        <option value="1">1-50 funcionários</option>
        <option value="2">51-300 funcionários</option>
        <option value="3">301-1000 funcionários</option>
        <option value="4">1001-2000 funcionários</option>
        <option value="5">2000+ funcionários</option>
    </select>
    <label htmlFor="pais/regiao">País/Região:</label>
    <select value={selects.country} onChange={(e) => changeSelect('country', e.target.value)} name="pais/regiao" id="pais/regiao">
        <option className='text-slate-300' value="" disabled selected>Selecione o País/Região</option>
        <option value="2">Estados Unidos</option>
        <option value="3">Canadá</option>
        <option value="4">Brasil</option>
        <option value="5">Reino Unido</option>
        <option value="6">França</option>
        <option value="7">Alemanha</option>
        <option value="8">Japão</option>
        <option value="9">Austrália</option>
        <option value="10">Índia</option>
        <option value="11">Brasil</option>
    </select>
    <label htmlFor="idioma">Idioma:</label>
    <select value={selects.languague} onChange={(e) => changeSelect('languague', e.target.value)}  name="idioma" id="idioma" required>
        <option className='text-slate-300' value="" disabled selected>Selecione o Idioma</option>
        <option value="1">Inglês</option>
        <option value="2">Holândes</option>
        <option value="3">Francês</option>
        <option value="4">Alemão</option>
        <option value="5">Italiano</option>
        <option value="6">Espanhol</option>
        <option value="7">Sueco</option>
        <option value="8">Português (Brasil)</option>
        <option value="9">Japonês</option>
        <option value="10">Chinês (simplificado)</option>
        <option value="11">Chinês (tradicional)</option>
        <option value="12">Coreano</option>
        <option value="13">Tailandês</option>
        <option value="14">Filandês</option>
        <option value="15">Russo</option>
    </select>
    <div className='termos flex'>
        <input checked={aceitaTermos} onClick={changeTermos} type="checkbox" name="aceita termos" id="aceita termos" /><label htmlFor='aceita termos'>Estou de acordo com o <a
            href="https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/salesforce_MSA.pdf"
            target="_blank">Main Services Agreement</a></label>
    </div>
    <p className='paragraphBottom' >Sua avaliação gratuita pode ser provisionada ou migrada para o Hyperforce, a infraestrutura de nuvem pública
        do Salesforce.</p>
    <p className='paragraphBottom'>Ao inscrever-se, você confirma que concorda com o processamento de seus dados pessoais pela Salesforce,
        conforme descrito na <a href="https://www.salesforce.com/br/company/privacy/full_privacy/">Declaração de
            privacidade</a></p>
    <input disabled={disabled} onClick={(e) => {enviarTesteGratis(form, selects, e.currentTarget)}} className='enviarFormulario' type="button" value="Iniciar Teste gratuito"/>
</form>
    )
}