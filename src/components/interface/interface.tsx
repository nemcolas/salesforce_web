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
}

interface CardsGallery{
    imgCard:string;
    altImgCard:string;
    title:string;
    paragraph?:string;
    children?:ReactNode;
}
export type {ButtonProps, containerContentLeftProps, CardsGallery};
    