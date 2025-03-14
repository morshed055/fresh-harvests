import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/Providers';


const rubik = Rubik({
  subsets: ['latin'], // Specify the subset(s) you want to load
  weight: ['400', '500', '600', '700'], // Specify the font weights you need
  variable: '--font-rubik', // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app with RTK Query, Tailwind CSS, and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <Providers>
          <div className='max-w-[1440px] mx-auto'>

          {children}
          </div>
          </Providers>
      </body>
    </html>
  );
}