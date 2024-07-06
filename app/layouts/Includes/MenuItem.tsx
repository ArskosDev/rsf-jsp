"use client"

import { MenuItemTypes } from "@/app/types";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";

export default function MenuItem( {iconString, colorString, sizeString}: MenuItemTypes){

    const icons = () => {
        if (iconString == 'Pour Toi') return <AiOutlineHome color ={colorString} size= {sizeString}/>
        if (iconString == 'Suivis') return <RiGroupLine color ={colorString} size= {sizeString}/>
        if (iconString == 'Live') return <BsCameraVideo color ={colorString} size= {sizeString}/>
    }
    return(
        <>
        
            <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
                <div className="flex items-center lg:mx-0 mx-auto">
                    
                    
                    {icons()}

                    <p className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}>

                    </p>

                </div>
            </div>        
        
        </>
    )

}