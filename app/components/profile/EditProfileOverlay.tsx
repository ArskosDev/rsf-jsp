import { CropperDimensions, ShowErrorObject } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react" ;

export default function EditProfileOverlay(){
    const router = useRouter()

    const [file, setFile] = useState <File | null>(null);
    const [cropper, setCopper] = useState <CropperDimensions | null >(null);
    const [uploadedImage, setUploadedImage] = useState<string | null >(null);
    const [userImage, setUserImage] = useState<string | ''>('');
    const [userName, setUserName] = useState<string | ''>('');
    const [userBio, setUserBio] = useState<string | ''>('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState<ShowErrorObject | null>(null);

    return(
        <>
        
            <div 
                id="EditProfileOverlay"
                className="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full bg-black bg-opacity-50 overflow-auto"
                >
                    <div className={`
                        relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10
                        ${!uploadedImage ? 'h-[655px]' : 'h-[580px]'}
                        `}>
                            <div className="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">


                            </div>

                    </div>

            </div>
        </>
    )
}