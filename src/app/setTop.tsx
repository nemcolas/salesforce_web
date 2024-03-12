'use client' 
import { usePathname } from 'next/navigation' 

function setHeaderTop() {
    return usePathname() === '/' || usePathname() === '/products' ? '' : 'hidden';
}

export { setHeaderTop }