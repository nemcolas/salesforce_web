import { ReactNode } from "react";

interface ButtonProps {
    text: string;
    link:string;
}

interface containerContentLeftProps {
    textHeader:string;
    textParagraph:string;
    linkButton:string;
    textButton:string;
    imgContainer:string;
    altImgContainer:string;
    children?:ReactNode
    isHome?:boolean;
}

interface CardsInterface{
    imgCard:string;
    altImgCard:string;
    paragraph:string;
    children?:ReactNode;
    homePage?:boolean;
}

interface conterinarContentCenterProps{
    title:string;
    children:ReactNode;
}    
export type {ButtonProps, containerContentLeftProps, CardsInterface, conterinarContentCenterProps};
    