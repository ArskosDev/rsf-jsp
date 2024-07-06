import React from "react";

import TopNav from "./Includes/TopNav";

export default function UploadLayout({ children }: { children: React.ReactNode }) {
   
    return (
        <>
            <div className="bg-[#F8F8F*] h-[100]">
                <TopNav/>
                <div className="flex jutify-between mx-auto w-full px-2 max-w-[1140px]">
                    {children}

                </div>

            </div>
            
       
            
        </>        
        
    )
}