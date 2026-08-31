import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Luma — студия услуг',description:'Lorem ipsum studio'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
