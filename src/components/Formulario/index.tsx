'use client'
import {validarForm, enviarTesteGratis} from './funcoes'

//Componente responsável pelo formulário da página de teste grátis.
export default function Formulario() {
    return ( <form onChange={validarForm} className='flex flex-col'>
    <div className='flex justify-between gap-5'>
        <div className='flex flex-col'>
            <label htmlFor="name">Nome:</label>
            <input className='text' type="text" name="name" id="name" placeholder="Nome" required />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input className='flex-1 text' type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" required />
        </div>
    </div>
    <label htmlFor="cargo">Cargo:</label>
    <input className='text' type="text" name="cargo" id="cargo" placeholder="Cargo" required />
    <label htmlFor="email corporativo">Email corporativo:</label>
    <input className='text' type="email" name="email corporativo" id="email corporativo" placeholder="Email corporativo" required />
    <label htmlFor="telefone">Telefone:</label>
    <input className='text' type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
    <label htmlFor="tamanho da empresa">Tamanho da empresa:</label>
    <select name="tamanho da empresa" id="tamanho da empresa" required>
        <option className='text-slate-300' value="" disabled selected>Tamanho da empresa</option>
        <option value="1">1-50 funcionários</option>
        <option value="2">51-300 funcionários</option>
        <option value="3">301-1000 funcionários</option>
        <option value="4">1001-2000 funcionários</option>
        <option value="5">2000+ funcionários</option>
    </select>
    <label htmlFor="pais/regiao">País/Região:</label>
    <select name="pais/regiao" id="pais/regiao" required>
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
    <select name="idioma" id="idioma" required>
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
        <input type="checkbox" name="aceita termos" id="aceita termos" required /><label htmlFor='aceita termos'>Estou de acordo com o <a
            href="https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/salesforce_MSA.pdf"
            target="_blank">Main Services Agreement</a></label>
    </div>
    <p className='paragraphBottom' >Sua avaliação gratuita pode ser provisionada ou migrada para o Hyperforce, a infraestrutura de nuvem pública
        do Salesforce.</p>
    <p className='paragraphBottom'>Ao inscrever-se, você confirma que concorda com o processamento de seus dados pessoais pela Salesforce,
        conforme descrito na <a href="https://www.salesforce.com/br/company/privacy/full_privacy/">Declaração de
            privacidade</a></p>
    <input onClick={enviarTesteGratis} className='enviarFormulario' type="button" value="Iniciar Teste gratuito"/>
</form>
    )
}