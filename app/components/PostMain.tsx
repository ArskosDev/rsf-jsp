 'use client';

import React, {useEffect } from "react";
import { PostMainCompType } from "../types";
import Link from "next/link";
import { ImMusic } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";

export default function PostMain({ post}: PostMainCompType) {

    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`video-${post?.id}`);

        if (postMainElement) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()

            }, {threshold: [0.6]}) 

            observer.observe(postMainElement);
        }
    }, [])

    return (
        <>
            <div id={`postMain-${post.id}`} className="flex border-b py-6">
                <div className="cursor-pointer">
                    <img className="rounded-full max-h-[60px]" width="60" src={post?.profile?.image} />

                </div>
                <div className="pl-3 w-full px-4">
                    <div className="flex items-center justify-between pb-0.5">
                        <Link href={`/profile/${post.profile.user_id}`}>
                            <span className="font-bold hover:underline cursor-pointer"> 
                                {post.profile.name}

                            </span>
                        </Link>

                        <button className="border text-[15px] px-[21px] py-0.5 border-[#F02c56] text-[#F02c56] hover:bg-[#ffeef2] font-semibold rounded-md">
                            Suivre
                        </button>

                    </div>
                    <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{post.text}</p>
                    <p className="text-[14px] text-gray-500 pb-0.5"> #refreshing #beach #vacation</p>
                    <p className="text-[14px] pb-0.5 flex items-center font-semibold">
                        <ImMusic size="20"/>
                        <span className="px-1"> Original sound - AWESOME</span>
                        <AiFillHeart size="20"/>
                    </p>

                    <div className="mt-2.5 flex">
                        <div className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
                            <video 
                                id={`video-${post.id}`}
                                loop
                                controls
                                muted
                            />

                        </div>

                    </div>

                </div>

            </div>
            
        
        </>
    )
}