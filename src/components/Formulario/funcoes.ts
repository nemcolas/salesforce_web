'use client'
import { modalTesteGratisProps, inputProps, selectsProps, testeGratisProps, backEndInfoProps, idiomaProps, paisProps, porteEmpresaProps } from './interface';

async function pegarInformacoesObjeto() {
    try {
        const [pais , idioma, porteEmpresa]: [paisProps, idiomaProps, porteEmpresaProps] = await Promise.all([
            fetch('http://localhost:8080/pais').then(res => res.json()),
            fetch('http://localhost:8080/idioma').then(res => res.json()),
            fetch('http://localhost:8080/porteempresa').then(res => res.json())
        ])
        
        return {
            pais,
            idioma,
            porteEmpresa
        }
    } catch (error) {
        console.log(error)
    }

}

function getEntidade(entidades: any, id: string) {
    let entidade: any = {}
    entidades.forEach((e: any) => {
        if (e.id == id) entidade = e
    })
    return entidade
}

async function construirObjetoTesteGratis(inputText: inputProps, selects: selectsProps, arrayInfoBackEnd: backEndInfoProps) {
    let idioma: idiomaProps = getEntidade(arrayInfoBackEnd.idioma, selects.idioma)
    let pais: paisProps = getEntidade(arrayInfoBackEnd.pais, selects.pais)
    let porteEmpresa: porteEmpresaProps = getEntidade(arrayInfoBackEnd.porteEmpresa, selects.porteEmpresa)

    return {
        nome: inputText.name,
        sobrenome: inputText.lastName,
        cargo: inputText.position,
        email: inputText.emailCorporate,
        telefone: inputText.phone,
        porteEmpresa: porteEmpresa,
        pais: pais,
        idioma: idioma
    }
}

async function enviarTesteGratis(inputText: inputProps, selects: selectsProps, input: HTMLInputElement, arrayInfoBackEnd: backEndInfoProps) {
    input.disabled = true
    input.value = "Verificando requisição..."
    const testeGratis = await construirObjetoTesteGratis(inputText, selects, arrayInfoBackEnd)
    let message = { message: '' }
    try {
        const resultado = await fetch('http://localhost:8080/testegratis/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testeGratis)
        })
        const resultadoJson: modalTesteGratisProps = await resultado.json()
        message.message = resultadoJson.message
        if (resultadoJson.message === 'Teste grátis cadastrado com sucesso! Iremos entrar em contato em breve') {
            enviarEmail(testeGratis)
        }
    } catch (error) {
        message.message = 'Erro ao enviar teste grátis, por favor entre em contato com o nosso suporte'
    }
    mostrarResultadoTesteGratis(message, input)
}

const SUCCESS_MESSAGE = 'Teste grátis cadastrado com sucesso! Iremos entrar em contato em breve';
const SUCCESS_TIMEOUT = 9000;
const FAILURE_TIMEOUT = 4000;

function criarImagem() {
    const image = document.createElement('img');
    image.src = '/image-free-trial/fechar.webp';
    image.alt = 'Icone de fechar';
    image.tabIndex = 0;
    image.classList.add('icone-fechar');
    return image;
}

function criarParagrafo(message: string) {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = message;
    return paragrafo;
}

function mostrarResultadoTesteGratis(message: modalTesteGratisProps, input: HTMLInputElement) {
    input.disabled = false;
    input.value = "Enviar Teste Grátis";

    const image = criarImagem();
    const paragrafo = criarParagrafo(message.message);
    const divResultado = document.createElement('div');
    divResultado.append(image, paragrafo);

    const isSuccess = message.message == SUCCESS_MESSAGE;
    divResultado.classList.add(isSuccess ? 'sucesso' : 'falha', 'div-retorno-teste');

    const main = document.querySelector('main');
    if (main) {
        main.insertBefore(divResultado, main.firstChild);
    }

    const removeDivResultado = () => divResultado.remove();
    image.addEventListener('click', removeDivResultado);
    image.addEventListener('keyup', (e) => {
        if (e.key == 'Enter' || e.key == 'Tab') {
            removeDivResultado();
        }
    });

    image.focus();

    setTimeout(removeDivResultado, isSuccess ? SUCCESS_TIMEOUT : FAILURE_TIMEOUT);
}

async function enviarEmail(testeGratis: testeGratisProps) {
    try {
        const result = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({ send: testeGratis.email, nome: testeGratis.nome }),
        });
    
        const response = await result.json();
    
        console.log(response);
    }catch(error){
        console.log(error)
    }
}

export { enviarTesteGratis, pegarInformacoesObjeto }