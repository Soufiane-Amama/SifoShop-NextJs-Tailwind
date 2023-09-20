import Image from "next/image";
import Link from "next/link";
// "use client";
// ====================================
async function getData(category) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
// ====================================
 
async function Category( {params, id} ) {
  let category;

  if(params)
    category = await getData(params.id);
     // console.log(params.id);
  else
    category = await getData(id);


    
  return (
       <div className="container mx-auto px-4 flex flex-wrap justify-center my-12">
       {
        category.map(product => (
          <Link href={`/products/${product.id}`} key={product.id} className="group/pro relative flex items-center mx-2 gap-3 mb-12 w-52 py-4 rounded-md shadow-md bg-white">
          <div className="container mx-auto px-4 text-center h-full flex flex-col justify-between">
            <Image 
            className="object-cover w-36 mx-8 mb-2 p-4 absolute inset-x-0 top-4 group-hover/pro:shadow-2xl group-hover/pro:-top-5 bg-white rounded-md transition-all ease-in-out duration-300"
            src={product.image}
            width={499}
            height={661}
            alt="product image"
            />
  
            <div className="pt-[188px] text-black mt-4">
            <div className="text-center text-[11px] p-1 mb-8 relative transition-all ease-in-out duration-100">
                <span className="py-3 whitespace-nowrap px-6 absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 transition-all ease-in-out duration-100 bg-stone-900 text-white shadow-2xl rounded-3xl group-hover/pro:shadow-none group-hover/pro:py-[9px] group-hover/pro:px-4 ">{product.category}</span> 
              </div>
              <h4 className="font-bold text-xs w-full mb-2">{product.title}</h4>
            </div>

            <div className="py-3 border-t-[1px] border-[#ddd]">
              <span className="text-yellow-500">{`$ ${product.price}`}</span>
              {/* <Link href="#" className="">Purchase icon</Link> */} 
              </div>
          </div>
        </Link>
        ))
      }
      
      </div>
  )
}

export default Category;