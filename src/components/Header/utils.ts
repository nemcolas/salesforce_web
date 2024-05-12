'use client'

import { Key, KeyboardEventHandler } from "react";

function criarMenu(linksMenu: Object, iconFecharMenu: HTMLImageElement) {
    const menuMobile: HTMLDivElement = document.createElement('div');
    menuMobile.tabIndex = -1;
    const ulMenuMobile: HTMLUListElement = document.createElement('ul');
    for (const [texto, href] of Object.entries(linksMenu)) {
        const liMenuMobile: HTMLLIElement = document.createElement('li');
        const aMenuMobile: HTMLAnchorElement = document.createElement('a');
        aMenuMobile.textContent = texto;
        aMenuMobile.href = href;
        liMenuMobile.appendChild(aMenuMobile);
        ulMenuMobile.appendChild(liMenuMobile);
    }
    menuMobile.append(ulMenuMobile, iconFecharMenu)
    return menuMobile;
}

function mostrarMenu(e: any) {
    if (e.type == 'click' || e.key === 'Enter') {
    const iconAbrirMenu = document.querySelector('.icon-menu');
    const headerPage = document.querySelector('header');
    if (iconAbrirMenu && headerPage) {
        const linksMenu: Object = {
            'Produtos': '/products',
            'Indústrias': 'https://www.salesforce.com/br/solutions/industries/',
            'Aprendizado': 'https://trailhead.salesforce.com/pt-BR',
            'Suporte': 'https://help.salesforce.com/s/',
            'Empresa': 'https://www.salesforce.com/br/company/our-story/',
            'Contato': 'https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9',
        }
        const iconFecharMenu: HTMLImageElement = document.createElement('img');
        iconFecharMenu.classList.add('icon-fechar-menu');
        iconFecharMenu.setAttribute('tabIndex', '0');
        iconFecharMenu.src = '/menu-aberto.png';
        iconFecharMenu.alt = 'Icone de X para fechar o menu';
        const menuMobile = criarMenu(linksMenu, iconFecharMenu);
        menuMobile.appendChild(iconFecharMenu);
        menuMobile.classList.add('menu-mobile', 'adicionar-menu');
        headerPage.appendChild(menuMobile);
        iconFecharMenu.addEventListener('click', esconderMenu);
        iconFecharMenu.addEventListener('keydown', esconderMenu);
        menuMobile.focus();
    }}
}

function esconderMenu(e:any)  {
    if (e.type == 'click' || e.key === 'Enter') {
        const iconAbrirMenu = document.querySelector('.icon-menu')
        const iconFecharMenu = document.querySelector('.icon-fechar-menu');
        const menuMobile = document.querySelector('.menu-mobile');
        if (iconFecharMenu && iconAbrirMenu && menuMobile) {
            iconAbrirMenu.classList.remove('hidden');
            menuMobile.classList.remove('adicionar-menu');
            menuMobile.classList.add('retirar-menu');
            setTimeout(() => {
                menuMobile.remove();
            }, 700);
            
            (iconAbrirMenu as HTMLImageElement).focus();
        }
    }
}

export { mostrarMenu };