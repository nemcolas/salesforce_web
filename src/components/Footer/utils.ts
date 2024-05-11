import { MapClass } from "./interface"

export function getClassFooter(path: string){
    const mapClass: MapClass = {
        '/': 'footer-top flex',
        '/products': 'footer-top flex',
        '/freetrial': 'hidden',
    }
    return mapClass[path]
}