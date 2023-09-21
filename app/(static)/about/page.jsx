import Image from "next/image";
import Photo from '/public/images/photo.jpg';

export const metadata = {
  title: 'SIFOSHOP - About',
  description: 'Get ready to explore our exceptional shopping world. High-quality and incredible variety at astonishing prices.',
}


const About = () => {
  return (
    <div className="container mx-auto px-5 w-full flex flex-col items-center justify-center min-h-screen py-20">
      
      <div className=" w-4/6 min-[320px]:w-full md:w-4/6 mb-10 p-5">
      <h1 className="font-bold tracking-[0.2rem] mb-2">ABOUT SIFOSHOP</h1>
      
      <div className="bg-[#ffdfce] p-5">
      <div className="uppercase text-sm font-bold text-black mb-2">We are here to serve</div>
        <p className="text-[11px] text-black font-normal">
          <span className="text-xs font-bold">Lorem ipsum dolor sit, amet consectetur</span> adipisicing elit. Autem, blanditiis 
          ipsa distinctio ea nisi fugit placeat vero laboriosam, non, voluptate similique 
          mollitia modi necessitatibus veniam omnis ullam cum! Sed, iure ipsa distinctio ea 
          nisi fugit placeat vero laboriosam, non, voluptate similique 
          mollitia modi necessitatibus veniam omnis ullam cum! Sed, iure
          mollitia modi necessitatibus veniam omnis ullam cum! Sed, iure ipsa distinctio ea 
          nisi fugit placeat vero laboriosam, non, voluptate similique 
          mollitia modi necessitatibus veniam omnis ullam cum! Sed, iure
        </p>
      </div>

      </div>

<div className="p-10 w-full h-fit content-center items-center flex justify-center min-[320px]:flex-col gap-4 md:justify-between md:flex-row">
    
      <div className="relative w-1/2 md:w-[700px]  min-[320px]:w-full mx-auto h-[300px]">
      <Image 
            className="object-cover rounded-md w-full"
            src={Photo}
            alt="Director's photo"
            fill={true} // ستتمدد الصورة على حسب اقرب حاوية تحمل ريليتف لتغطيها 100% ا...
            />
      </div>

      <div className="w-3/4 min-[320px]:w-full whitespace-break-spaces py-3">
        <h2 className=" text-xl mb-3">About us</h2>
        <p className="
          text-sm 
          leading-[19px] 
          h-full 
          w-full 
          ">
        SIFOSHOP is a global online retail destination for inspiring and 
        discovering fashion, offering women and men a curated selection of 
        ready-to-wear clothing, accessories from over 1 established and emerging 
        designers, as well as electronic devices. With the introduction of new 
        arrivals, compelling editorial content, and daily style guides,
        SIFOSHOP provides best-in-class customer service, fast and free 
        shipping worldwide, and free returns in the United States, Canada
        and Algeria.
        </p>
      </div>

</div>



 {/* 

      <div className="bg-green-300">
      <h1>ABOUT SIFOSHOP</h1>

      <div className="bg-red-300">
      <div className="uppercase">We are here to serve</div>
        <p className="text-xs">
          <span className="font-bold">Lorem ipsum dolor sit, amet consectetur</span> adipisicing elit. Autem, blanditiis 
          ipsa distinctio ea nisi fugit placeat vero laboriosam, non, voluptate similique 
          mollitia modi necessitatibus veniam omnis ullam cum! Sed, iure?
        </p>
      </div>

      </div>

<div className="
   bg-blue-300 
     w-full
     flex 
     flex-row
     justify-evenly 
     text-center
     min-[320px]:bg-red-500
     min-[320px]:flex-col
     min-[320px]:justify-center 
     md:flex-col
     md:bg-green-500
     md:justify-center 
     lg:bg-blue-500
     lg:justify-center
     lg:flex-row xl:flex-row">
    
      <div className="relative w-[40%] h-72 mx-6 max-w-md md:w-[390px] min-[320px]:w-[390px]">
      <Image 
            className="object-cover rounded-md w-full"
            src={Photo}
            alt="Director's photo"
            fill={true} // ستتمدد الصورة على حسب اقرب حاوية تحمل ريليتف لتغطيها 100% ا...
            />
      </div>

      <div className="bg-pink-300 px-8">
        <h2 className="">About us</h2>
        <p className="
          text-sm 
          leading-[19px] 
          ">
        SIFOSHOP is a global online retail destination for inspiring and 
        discovering fashion, offering women and men a curated selection of 
        ready-to-wear clothing, accessories from over 1 established and emerging 
        designers, as well as electronic devices. With the introduction of new 
        arrivals, compelling editorial content, and daily style guides,
        SIFOSHOP provides best-in-class customer service, fast and free 
        shipping worldwide, and free returns in the United States, Canada
        and Algeria.
        </p>
      </div>

</div>

*/}

    </div>
  );
}

export default About;
