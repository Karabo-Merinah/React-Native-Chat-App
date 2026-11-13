import { ImageSourcePropType } from "react-native"

// Defines the properties of each chat
export interface Chats {
    id: number
    image: ImageSourcePropType
    name: string
    time: string
    message: string
    count: number
    status: string
}

// Background colours for each avatar
export const avatarColors = [
    "#B5DEED", 
    "#2DA5F3", 
    "#BEB7E1", 
    "#F6BFCD", 
    "#F5D2A0",
    "#C5E5F5",
    "#B8E8C1",
    "#ECE1AF"
]
