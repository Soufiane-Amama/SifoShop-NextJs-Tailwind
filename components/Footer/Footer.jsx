import Image from "next/image";
import Link from "next/link";
import { social_media } from "./data";

const Footer = () => {
  return (
    <footer className="text-white font-light bg-gray-800 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="flex flex-row w-fit mt-6 lg:mb-0 mb-6">
          {
            social_media.map(media =>
              <Link href={media.url} target="_blank">
              <Image 
              key={media.id}
              src={`/images/icons/${media.name}.png`}
              className="bg-white cursor-pointer opacity-70 hover:opacity-100 transition text-lightBlue-400 shadow-lg shadow-[#131212] font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" 
              width={20} 
              height={20} 
              alt={`Sifoshop ${media.name} Link`} /></Link>
            )
          }
        </div>
      </div>
    </div>
    
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><Link href="/about" className="text-blueGray-500 hover:text-slate-400" target="_blank"> Soufiane Amama by </Link>
          <Link href="#" className="text-blueGray-500 hover:text-blueGray-800">SIFOSHOP</Link>.
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
