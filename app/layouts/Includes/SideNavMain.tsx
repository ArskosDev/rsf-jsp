
import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem";
import ClientOnly from "./ClientOnly"


export default function SideNavMain() {
    
    const pathname = usePathname();

    

    return (
        <>
            <div id="SideNavMain" className={`
                fixed z-20 bg-whitw pt-[70px] h-full lg:border-r-0 border-r-0 border-r w-[75px] overflow-auto
                ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                
                `}>
                    <div className="lg:w-full w-[55px] mx-auto">
                        <a href="http://">
                            <MenuItem iconString="Pour Toi"
                            colorString={pathname == '/' ? '#F02C56' : ''}
                            sizeString="25"/>
                        </a>
                        <a href="http://"><MenuItem iconString="Suivis"
                            colorString={pathname == '/' ? '#000000' : ''}
                            sizeString="25"
                        /></a>
                        <a href="http://"><MenuItem iconString="Live"
                            colorString={pathname == '/' ? '#000000' : ''}
                            sizeString="25"
                        /></a>

                    </div>
                    
                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text text-xs text-gray-600 font-se;ibold pt-4 pb-2 px-2">
                        Comptes suggeres
                    </h3>

                    <div className="lg:hidden block pt-3"/>
                    <ClientOnly className="cursor-pointer">
                        <MenuItemFollow user={ { id: "1", name: "Test user", image:"https://placehold.co/50"}} />
                    

                    </ClientOnly>


                        

                    

            </div>
            
        </>
    );
}
