export interface RandomUsers{
    id: string
    name: string
    image: string
}

export interface PostWithProfile {
    id: string,
    user_id: string,
    video_url: string,
    text: string,
    created_at: string,
    event_name: string,
    event_location:string,
    profile:{
        user_id: string,
        name: string,
        image: string,
    }
}

/////////////////////////////
/////////////////////////////

// COMPONENTS TYPES

export interface PostMainCompType {
    post: PostWithProfile
}


// LAYOUT INCLUDE TYPES

export interface MenuItemTypes {
    iconString: string,
    colorString: string,
    sizeString: string 
}


export interface MenuItemFollowCompTypes{
    user: RandomUsers
}