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

function mostrarResultadoTesteGratis(message: modalTesteGratisProps, input: HTMLInputElement) {
    input.disabled = false
    input.value = "Enviar Teste Grátis"
    const image = document.createElement('img')
    const paragrafo = document.createElement('p')
    const main = document.querySelector('main')
    const divResultado = document.createElement('div')
    paragrafo.innerHTML = message.message
    image.src = '/image-free-trial/fechar.webp'
    image.alt = 'Icone de fechar'
    image.tabIndex = 0
    image.focus()
    image.classList.add('icone-fechar')
    divResultado.append(image, paragrafo)
    divResultado.classList.add(`${message.message == 'Teste grátis cadastrado com sucesso! Iremos entrar em contato em breve' ? 'sucesso' : 'falha'}`, 'div-retorno-teste')
    if (main) {
        main.insertBefore(divResultado, main.firstChild)
    }
    image.addEventListener('click', () => {
        divResultado.remove()
    })
    image.addEventListener('keyup', (e) => {
        if (e.key == 'Enter' || e.key == 'Tab')
            divResultado.remove()
    })

}

async function enviarEmail(testeGratis: testeGratisProps) {
    const result = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ send: testeGratis.email, nome: testeGratis.nome }),
    });

    const response = await result.json();

    console.log(response);
}

export { enviarTesteGratis, pegarInformacoesObjeto }