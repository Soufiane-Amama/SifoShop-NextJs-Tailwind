import Link from "next/link";


// ====================================
async function getData() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  // ====================================


  async function Menu() {
    const categories = await getData();


  return (
    <div className="bg-[#374151] text-gray-200 flex justify-center items-center p-1 flex-row h-20 py-8 mx-auto">
    <ul className="items-stretch mx-5 gap-3 justify-evenly flex flex-wrap space-x-5 lg:flex">
      <li className="flex text-sm hover:text-pink-400"><Link href={"/products"}>All</Link></li>
      {
          categories.map(category => (
            <li key={categories.indexOf(category)}  className="flex text-sm hover:text-pink-400"><Link href={`/products/category/${category}`}>{category}</Link></li>
          ))
      }
    </ul> 
    </div>
  )
}

export default Menu; 