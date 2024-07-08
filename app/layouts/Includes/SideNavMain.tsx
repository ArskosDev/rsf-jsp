import { Span } from "next/dist/trace";
import { usePathname, useRouter } from "next/navigation"
import MenuItem from "./MenuItem";


export default function SideNavMain() {
    
    const pathname = usePathname();

    

    return (
        <>
            <div id="SideNavMain" className={`
                fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r-0 border-r w-[75px] overflow-auto
                ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                
                `}>
                    <div className="lg:w-full w-[55px] mx-auto">
                        <a href="http://">
                            <MenuItem iconString="Pour Toi" colorString={pathname == '/' ? '#F02C56' : ''} sizeString="25"/>        
                        </a>
                        <a href=""><MenuItem iconString="Suivis" colorString={pathname == '/' ? '#000000' : ''} sizeString="25"/></a> 
                        <a href=""><MenuItem iconString="Live" colorString={pathname == '/' ? '#000000' : ''} sizeString="25"/></a> 

                    </div>
                    <div className="border-b lg:ml-2 mt-2"/>
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb- px-2">Comptes Suggeres</h3>

                    

            </div>
            
        </>
    );
}
