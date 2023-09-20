import Link from "next/link";
import { links } from "./data";
import Button from "../Button/Button";
import Logo from "@/app/elements/Logo/Logo";
import DarkMoreToggle from "../DarkMoreToggle/DarkMoreToggle";
import Sidebar from "../Sidebar/Sidebar";
import Search from "@/app/elements/Search/Search";


const Navbar = () => {

  return (
    <header className="p-4 w-full dark:bg-gray-800 relative dark:text-gray-100">
	<div className="container flex justify-between items-center h-16 mx-auto ">

		<Logo />

    <ul className='items-stretch hidden space-x-3 lg:flex'>
        {
          links.map(index =>
            <li className="flex mx-2">
              <Link className="flex items-center px-3 text-sm font-bold pb-3 -mb-1 hover:border-b-2 dark:border-solid hover:dark:text-pink-400 dark:border-pink-400" key={index.id} href={index.url}  rel="noopener noreferrer" >{index.title}</Link>
            </li>
          )
        }
        <DarkMoreToggle />
      </ul>


		<div className="items-center flex-shrink-0 hidden w-fit lg:flex">
      <span className="mx-2"> <Search /></span>
			<Link href={"/login"} className="self-center px-6 py-3 rounded">Sign in</Link>
			<Link href={"/login"} className="self-center px-6 py-3 font-semibold rounded dark:bg-pink-400 text-gray-200">Sign up</Link>
		</div>
		<Sidebar />
	</div>
</header>

    // {/* حتى تشتغل onClick كان يجب تحويل المكون باكمله الى use cleint ولتفادي ذلك تم فصل الزر في مكون لوحده للكلاينت وحتى تشتغل onClick. */}
    // <Button />
  
  );
}

export default Navbar;
