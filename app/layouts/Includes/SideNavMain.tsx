
import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"
import ClientOnly from "@/app/components/ClientOnly"
import MenuItemFollow from "./MenuItemFollow";


export default function SideNavMain() {
    
    const pathname = usePathname();

    

    return (
        <>
            <div id="SideNavMain" className={`fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r-1 border-r w-[75px] overflow-auto ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}`}>
                <div className="lg:w-full w-[55px] mx-auto">
                    <a href="http://">
                        <MenuItem iconString="Pour Toi"
                            colorString={pathname == '/' ? '#F02C56' : ''}
                            sizeString="25"/>
                    </a>
                    <MenuItem iconString="Suivis" colorString="#000000" sizeString="25" />
                    <MenuItem iconString="Live" colorString="#000000" sizeString="25" />

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text text-xs text-gray-600 font-se;ibold pt-4 pb-2 px-2">Comptes suggeres</h3>

                    <div className="lg:hidden block pt-3"/>

                    <ClientOnly >
                        <div className="cursor-pointer">
                            <MenuItemFollow user={ { id: "1", name: "Test user", image:"https://placehold.co/50"}} />
                                    
                        </div>                    

                    </ClientOnly>

                    <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-1.5 pl-2 text-[13px]">
                        Voir tout

                    </button>

                    {true ? (
                        <div>

                            <div className="border-b lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text text-xs text-gray-600 font-se;ibold pt-4 pb-2 px-2">Vous suivent</h3>

                            <div className="lg:hidden block pt-3"/>

                            <ClientOnly >
                                <div className="cursor-pointer">
                                    <MenuItemFollow user={{ id: "1", name: "Test user", image:"https://placehold.co/50"}} />
                                            
                                </div>           

                            </ClientOnly>

                            <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-1.5 pl-2 text-[13px]">
                                Voir plus

                            </button>            
                            
                            
                        </div>
                    ) : null}

                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />

                    <div className="lg:block hidden text-[11px] text-gray-500 ">
                        <p className="pt-4 px-2">A propos Nouvelles RSF Boutique Contact Cariere </p>
                        <p className="pt-4 px-2">The real south face</p>
                        <p className="pt-4 px-2"> Respectez les regles</p>
                        <p className="pt-4 px-2">Copyright 2023 RSF</p>

                    </div>
                </div>
                    
                                                  

            </div>
            
        </>
    );
}
