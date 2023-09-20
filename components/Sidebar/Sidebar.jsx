"use client";

import Link from "next/link";
import DarkMoreToggle from "../DarkMoreToggle/DarkMoreToggle";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useContext } from "react";
import { OpenMenuContext } from "@/context/OpenMenuContext";

export default function Sidebar() {
	const { open } = useContext(OpenMenuContext)
      
  return (
    <div className={`group/x flex flex-col h-full w-60 dark:bg-gray-900 absolute top-4 right-0 dark:text-gray-100 z-20 ${ !open ? 'invisible' : 'visible'} lg:hidden`}>
        <div className="dark:bg-gray-900 p-3">
	<div className="space-y-3">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
            <HamburgerButton />
		</div>
		<div className="relative">
			<span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input type="search" id="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
		</div>

		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm hover:dark:bg-gray-800">
					<Link rel="noopener noreferrer" href={"/"} className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
						</svg>
						<span>Home</span>
					</Link>
				</li>
				<li className="rounded-sm hover:dark:bg-gray-800">
					<Link rel="noopener noreferrer" href={"#search"} className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
						<span>Search</span>
					</Link>
				</li>
				<li className="rounded-sm hover:dark:bg-gray-800">
					<Link rel="noopener noreferrer" href={"/products"} className="flex items-center p-2 space-x-3 rounded-md">
                     <svg width="23px" height="23px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.72"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#cccCCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> 
					 <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="#ccc" stroke-linecap="round" stroke-linejoin="round"></path> 
					 <path d="M5 11V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11" stroke="#ccc"></path> 
					 <path d="M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.5823 9.32938C20.6792 9.71675 20.7276 9.91044 20.7169 10.0678C20.6892 10.4757 20.416 10.8257 20.0269 10.9515C19.8769 11 19.6726 11 19.2641 11V11C18.7309 11 18.4644 11 18.2405 10.9478C17.6133 10.8017 17.0948 10.3625 16.8475 9.76781C16.7593 9.55555 16.7164 9.29856 16.6308 8.78457V8.78457C16.6068 8.64076 16.5948 8.56886 16.5812 8.54994C16.5413 8.49439 16.4587 8.49439 16.4188 8.54994C16.4052 8.56886 16.3932 8.64076 16.3692 8.78457L16.2877 9.27381C16.2791 9.32568 16.2747 9.35161 16.2704 9.37433C16.0939 10.3005 15.2946 10.9777 14.352 10.9995C14.3289 11 14.3026 11 14.25 11V11C14.1974 11 14.1711 11 14.148 10.9995C13.2054 10.9777 12.4061 10.3005 12.2296 9.37433C12.2253 9.35161 12.2209 9.32568 12.2123 9.27381L12.1308 8.78457C12.1068 8.64076 12.0948 8.56886 12.0812 8.54994C12.0413 8.49439 11.9587 8.49439 11.9188 8.54994C11.9052 8.56886 11.8932 8.64076 11.8692 8.78457L11.7877 9.27381C11.7791 9.32568 11.7747 9.35161 11.7704 9.37433C11.5939 10.3005 10.7946 10.9777 9.85199 10.9995C9.82887 11 9.80258 11 9.75 11V11C9.69742 11 9.67113 11 9.64801 10.9995C8.70541 10.9777 7.90606 10.3005 7.7296 9.37433C7.72527 9.35161 7.72095 9.32568 7.7123 9.27381L7.63076 8.78457C7.60679 8.64076 7.59481 8.56886 7.58122 8.54994C7.54132 8.49439 7.45868 8.49439 7.41878 8.54994C7.40519 8.56886 7.39321 8.64076 7.36924 8.78457V8.78457C7.28357 9.29856 7.24074 9.55555 7.15249 9.76781C6.90524 10.3625 6.38675 10.8017 5.75951 10.9478C5.53563 11 5.26905 11 4.73591 11V11C4.32737 11 4.12309 11 3.97306 10.9515C3.58403 10.8257 3.31078 10.4757 3.28307 10.0678C3.27239 9.91044 3.32081 9.71675 3.41765 9.32938L4.62127 4.51493Z" stroke="#ccc"></path> </g>
					 </svg>
						<span>Products</span>
					</Link>
				</li>
				<li className="rounded-sm hover:dark:bg-gray-800">
					<Link rel="noopener noreferrer" href={"/contact"} className="flex items-center p-2 space-x-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
							<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
						</svg>
						<span>Contact</span>
					</Link>
				</li>
				<li className="rounded-sm hover:dark:bg-gray-800 dark:text-gray-50">
					<Link rel="noopener noreferrer" href={"/about"} className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
						</svg>
						<span>About</span>
					</Link>
				</li>
				<li className="rounded-sm">
					<span  className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
							<rect width="32" height="64" x="256" y="232"></rect>
						</svg>
						<span className="flex justify-evenly w-[80%]">
						<Link href={"/login"}>Sign in</Link>/
						<Link href={"/login"}>Sign up</Link>
						</span>
					</span>
				</li>
			</ul>
		</div>
	</div>

	<div className="flex items-center p-2 space-x-4 justify-self-end dark:bg-gray-900">
	<span><DarkMoreToggle /></span>
		<div>
			<h2 className="text-lg font-semibold">Dark mode</h2>
		</div>
	</div>
    </div>
</div>
  )
}
