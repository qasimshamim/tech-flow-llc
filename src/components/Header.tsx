"use client"
import Link from "next/link"
import { usePathname,useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Logo, MobileMenu } from "@/components/index"
import { navLinks } from '@/constants/index'
import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"



const Header = () => {

  const router = useRouter()

  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && 'glass py-2 '} fixed inset-x-0 z-50 duration-300 transition-all`}>


      <nav className="py-2.5 ">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 ">
          <Logo color={true} />
          <div className="flex items-center lg:order-2">

            <div  className="hidden lg:flex"
               onClick={() => router.push('/contact-us')} >
              <Button className="bg-Tblue hover:bg-TDarkBlue hidden sm:block">Contact Us</Button>
            </div>
            <HiOutlineMenuAlt3 color='white' className='font-bold text-4xl cursor-pointer lg:hidden' onClick={() => { setIsOpen(!isOpen) }} />


            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />

          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {
                navLinks.length > 0 && navLinks.map((v, i) => (
                  <li key={i}  onClick={() => router.push(v.link)}> 
                      <NavigationMenu>
                        <NavigationMenuList >
                          <NavigationMenuItem >
                            <NavigationMenuTrigger className={`${!v.menu && 'before:w-full'} ${pathname === v.link ? 'bg-TDarkBlue' : 'bg-transparent'} hover:bg-transparent hover:text-white  text-white  capitalize `}>{v.title}</NavigationMenuTrigger>
                            {
                              v.menu && <NavigationMenuContent >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  Documentation
                                </NavigationMenuLink>

                              </NavigationMenuContent>
                            }
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu> 
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header