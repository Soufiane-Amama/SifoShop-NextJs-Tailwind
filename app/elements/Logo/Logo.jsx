import Link from "next/link";

import { Montserrat } from 'next/font/google'
const logoFont = Montserrat({ 
    subsets: ['latin'],
    weight: ['600'],
 })

const Logo = () => {
  return (
    <div className="text-2xl font-bold text-pink-400">
     <Link href="/" className={logoFont.className}>SIFOSHOP</Link>
    </div>
  );
}

export default Logo;
