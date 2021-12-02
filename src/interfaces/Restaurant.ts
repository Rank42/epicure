import {Dish} from "./Dish";

export interface Restaurant{
    name:string
    img:string
    dishes?:Dish[]
    chef?:string
    openTime?:string
    closeTime?:string
    dateAdded?:any
    favorites?:number
} 