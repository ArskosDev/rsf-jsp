"use client"

import React from "react";
import { ProfilePageTypes } from "../../types";
import MainLayout from "../../layouts/mainLayout";
import ClientOnly from "../../components/ClientOnly";

export default function Profile({ params }: ProfilePageTypes) {
    return(
        <>
            <MainLayout>
                <div className=" pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[clac-(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto">
                    <div className="flex w-[calc(100vw-230px0]">
                        <ClientOnly children={undefined}>
                            
                        </ClientOnly>

                    </div>

                </div>
            </MainLayout>
        
        </>
    )

}