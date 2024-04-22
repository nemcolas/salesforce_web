'use client'
import {modalTesteGratisProps, inputProps, selectsProps, testeGratisProps} from './interface';
async function pegarIdioma(id: String) {
    try {
        const resultado = await fetch(`http://localhost:8080/idioma/${id}`)
        const json = await resultado.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

async function pegarPorteEmpresa(id: String) {
    try{
        const resultado = await fetch(`http://localhost:8080/porteempresa/${id}`)
        const json = await resultado.json()
        return json
    }catch(error){
        console.log(error)
    }
}

async function pegarPais(id: String) {
    try{
        const resultado = await fetch(`http://localhost:8080/pais/${id}`)
        const json = await resultado.json()
        return json
    }catch(error){
        console.log(error)
    }
}

async function construirObjetoTesteGratis(inputText: inputProps, selects: selectsProps) {
    return {
        nome: inputText.name,
        sobrenome: inputText.lastName,
        cargo: inputText.position,
        email: inputText.emailCorporate,
        telefone: inputText.phone,
        porteEmpresa: await pegarPorteEmpresa(selects.sizeCompany),
        pais: await pegarPais(selects.country),
        idioma: await pegarIdioma(selects.languague)
    }
}

async function enviarTesteGratis(inputText: inputProps, selects: selectsProps, input: HTMLInputElement) {
    input.value = "Verificando requisição..."
    const testeGratis = await construirObjetoTesteGratis(inputText, selects)
    let message = {message: ''}
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
        if(resultadoJson.message === 'Teste grátis cadastrado com sucesso! Iremos entrar em contato em breve') {
            enviarEmail(testeGratis)
        }
    } catch (error) {
        message.message = 'Erro ao enviar teste grátis, por favor entre em contato com o nosso suporte'
    }
    mostrarResultadoTesteGratis(message, input)
}

function mostrarResultadoTesteGratis(message: modalTesteGratisProps, input: HTMLInputElement) {
    input.value = "Enviar Teste Grátis"
    const image = document.createElement('img')
    const paragrafo = document.createElement('p')
    const main = document.querySelector('main')
    const divResultado = document.createElement('div')
    paragrafo.innerHTML= message.message
    image.src = '/image-free-trial/fechar.webp'
    image.alt = 'Icone de fechar'
    image.tabIndex = 0
    image.classList.add('icone-fechar')
    divResultado.append(image, paragrafo)
    divResultado.classList.add(`${message.message == 'Teste grátis cadastrado com sucesso! Iremos entrar em contato em breve' ? 'sucesso' : 'falha'}`, 'div-retorno-teste')
    if(main){
        main.insertBefore(divResultado, main.firstChild)
    }
    image.addEventListener('click', () => {
        divResultado.remove()
    })
    image.addEventListener('keyup', (e) => {
        if(e.key == 'Enter' || e.key == 'Tab')
            divResultado.remove()
    })

}

async function enviarEmail(testeGratis: testeGratisProps){
    const result = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ send: testeGratis.email, nome: testeGratis.nome}),
      });
  
      const response = await result.json();

      console.log(response);
}  

export { enviarTesteGratis }