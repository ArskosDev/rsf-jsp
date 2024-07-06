import { Span } from "next/dist/trace";
import { usePathname, useRouter } from "next/navigation"
import MenuItem from "./MenuItem";


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

                    </div>

            </div>
            
        </>
    );
}
