import Image from "next/image";
import Link from "next/link";
import Icon from "/public/images/icons/icon.svg";


export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: `SIFOSHOP - ${product.title}`,
    description: `${product.description}`,
  }
}


// ====================================
async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
// ====================================


async function Product({params}) {
 const product = await getData(params.id);

  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-screen py-20">

          <div className="flex items-center w-full leading-7 justify-around gap-10 min-[320px]:flex-col md:flex-col bg-white rounded-md shadow-md shadow-neutral-900 p-6 lg:flex-row">
    
       <div className="w-[45%]">
          <Image 
          className="object-cover rounded-md bg-white"
          src={product.image}
          width={499}
          height={661}
          alt="product image"
          fill={false}
          />
       </div>

       <div className="w-fit p-3 md:w-full sm:w-full min-[320px]:w-full">
        <span className="text-white bg-pink-400 inline-block py-[7px] px-[12px] rounded-[50px] text-xs uppercase mb-8">{product.category}</span>
        <h1 className="text-2xl text-black">{product.title}</h1>
        <p className="text-sm min-[320px]:w-full text-[#aaa] mb-8 mt-[20px] w-[550px]">
          {product.description}
        </p>
  
      <div className="flex items-center space-x-2 my-3 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">{product.rating.rate}</span>
		  </div>

      <div className="dark:text-black font-bold my-3">The remaining quantity: <span className="font-normal mx-3 p-2 border-b-2 border-red-500 text-red-500">{product.rating.count}</span></div>

       <div className="w-fit h-fit mb-3 mt-10 relative py-3 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-sm shadow-black hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
        <Link href={"#"}>
				<span className="text-[11px] pr-2 inline-block border-r-[1px] border-[#ccc]">{`$ ${product.price}`}</span>
        <span className="text-[11px] pl-2 inline-block border-l-[1px] border-[#ccc]" ><Image src={Icon} className="w-[19px] inline-block mr-1" alt='icon' />SHOP NOW</span>
        </Link>
			 </div>
       </div>

       </div>

    </div>
  );
}

export default Product;
