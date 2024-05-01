import React from 'react';
import Image from 'next/image';
import '@/style/free-trial.css';
import Formulario from '@/components/Formulario';

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
                < Formulario />
            </section>
        </main>
    );
}

