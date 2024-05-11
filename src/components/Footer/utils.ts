import { MapClass } from "./interface"

export function getClassFooter(path: string){
    const mapClass: MapClass = {
        '/': 'footer-top flex',
        '/products': 'footer-top flex',
        '/freetrial': 'footer-top flex',
    }
    return mapClass[path]
}