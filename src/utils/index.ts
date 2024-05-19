export const emailRegex: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
export const telefoneRegex: RegExp = /^\d{11}$/;
const teclasNavegacao = ['Tab', 'Enter']

export function validaCampoTexto(e: any) {
    if (!teclasNavegacao.includes(e.key)) {
        if ((e.target.value.length < 3 || e.target.value.replace(/ /g, '') === '')) {
            setarCampoInvalido(e.target)
        } else {
            retirarCampoInvalido(e.target)
        }
    }
}

export function validaCampoEmailTelefone(e: any, regex: RegExp) {
    if (!teclasNavegacao.includes(e.key)) {
        if(!regex.test(e.target.value)) {
            setarCampoInvalido(e.target)
        } else {
            retirarCampoInvalido(e.target)
        }
    }
}

function setarCampoInvalido(elemento: any) {
    elemento.classList.add('input-incorreto')
    elemento.classList.remove('input-correto')
    elemento.setAttribute('aria-invalid', 'true')
}

function retirarCampoInvalido(elemento: any) {
    elemento.classList.remove('input-incorreto')
    elemento.classList.add('input-correto')
    elemento.setAttribute('aria-invalid', 'false')
}