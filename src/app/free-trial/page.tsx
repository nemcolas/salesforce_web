import React from 'react';
import Image from 'next/image';
import './free-trial.css';

export default function FreeTrial() {
    return (
        <main className='free-trial flex gap-10'>
            <section className='info-free-trial'>
                <h1>
                    Experimente nossa solução completa de CRM e vendas, grátis por 30 dias
                </h1>
                <h2>Com o Sales Cloud Edition, você tem acesso a:</h2>
                <ul>
                    <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                    <li>Processos, relatórios e dashboards pré-configurados;</li>
                    <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                    <li>Guias e outros materiais sobre boas práticas de vendas;</li>
                    <li>Onboarding integrado, treinamentos e webinars online;</li>
                    <li>Configuração de pontuação e roteamento de leads;</li>
                    <li>Ferramentas para automação de tarefas recorrentes;</li>
                    <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
                </ul>
                <Image className='img' src="/image-free-trial/what-is-astro-product-family.png" alt="tabelas de graficos da salesforce cloud software" width={600} height={700} />
            </section>
            <section className='formContainer'>
                <h2>Inscreva-se para comecar sua avaliação gratuita</h2>
                <h3>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito</h3>
                <form className='flex flex-col'>
                    <div className='flex justify-between gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name="name" id="name" placeholder="Nome" required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="sobrenome">Sobrenome:</label>
                            <input className='flex-1' type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" required />
                        </div>
                    </div>
                    <label htmlFor="cargo">Cargo:</label>
                    <input type="text" name="cargo" id="cargo" placeholder="Cargo" required />
                    <label htmlFor="email corporativo">Email corporativo:</label>
                    <input type="email" name="email corporativo" id="email corporativo" placeholder="Email corporativo" required />
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
                    <label htmlFor="tamanho da empresa">Tamanho da empresa:</label>
                    <select name="tamanho da empresa" id="tamanho da empresa" required>
                        <option className='text-slate-300' value="" disabled selected>Tamanho da empresa</option>
                        <option value="1-50">1-50 funcionários</option>
                        <option value="51-300">51-300 funcionários</option>
                        <option value="301-1000">301-1000 funcionários</option>
                        <option value="1001-2000">1001-2000 funcionários</option>
                        <option value="2000+">2000+ funcionários</option>
                    </select>
                    <label htmlFor="pais/regiao">País/Região:</label>
                    <select name="pais/regiao" id="pais/regiao" required>
                        <option className='text-slate-300' value="" disabled selected>Selecione o País/Região</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Canada">Canadá</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Reino Unido">Reino Unido</option>
                        <option value="Franca">França</option>
                        <option value="Alemanha">Alemanha</option>
                        <option value="Japao">Japão</option>
                        <option value="Australia">Austrália</option>
                        <option value="India">Índia</option>
                        <option value="Brasil">Brasil</option>
                    </select>
                    <label htmlFor="idioma">Idioma:</label>
                    <select name="idioma" id="idioma" required>
                        <option className='text-slate-300' value="" disabled selected>Selecione o Idioma</option>
                        <option value="Ingles">Inglês</option>
                        <option value="Holandes">Holândes</option>
                        <option value="Frances">Francês</option>
                        <option value="Alemão">Alemão</option>
                        <option value="Italiano">Italiano</option>
                        <option value="Espanhol">Espanhol</option>
                        <option value="Sueco">Sueco</option>
                        <option value="Portugues(Brasil)">Português (Brasil)</option>
                        <option value="Japones">Japonês</option>
                        <option value="Chines(simplificado)">Chinês (simplificado)</option>
                        <option value="Chines(tradicional)">Chinês (tradicional)</option>
                        <option value="Coreano">Coreano</option>
                        <option value="Tailandes">Tailandês</option>
                        <option value="Filandes">Filandês</option>
                        <option value="Russo">Russo</option>
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
                    <input className='enviarFormulario' type="submit" value="Iniciar Teste gratuito" />
                </form>
            </section>
        </main>
    );
}

