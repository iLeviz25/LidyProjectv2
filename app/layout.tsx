import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LCArq - Projetos com propósito e precisão',
  description: 'Desenvolvimento de plantas executivas, maquetes 3D e renders realistas para interiores e exteriores. Projetos arquitetônicos modernos com entrega pontual.',
  keywords: ['arquitetura', 'plantas executivas', 'maquetes 3D', 'renders', 'projetos arquitetônicos'],
  authors: [{ name: 'LCArq' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}