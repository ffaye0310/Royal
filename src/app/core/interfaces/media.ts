import { Entry } from "./entry";

interface MediaData{
    name : string,
    alternativeText : string | null,
    caption : string | null,
    width : number,
    height: number,
    formats : {
            large: {
                ext : string,
                url : string,
                hash: string,
                mime: string,
                name : string,
                path : string,
                size : string,
                width : number,
                height : number
            },
            small: {
                ext : string,
                url : string,
                hash: string,
                mime: string,
                name : string,
                path : string,
                size : string,
                width : number,
                height : number
            },
            medium: {
                ext : string,
                url : string,
                hash: string,
                mime: string,
                name : string,
                path : string,
                size : string,
                width : number,
                height : number
            },
            thumbnail: {
                ext : string,
                url : string,
                hash: string,
                mime: string,
                name : string,
                path : string,
                size : string,
                width : number,
                height : number
            }
        },
       
        
}

export interface Media {
    data : Entry<MediaData>
}
