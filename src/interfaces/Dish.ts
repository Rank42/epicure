export interface Dish {
    name:string
    img:string
    icon:string
    description:string
    price:number
    meal: "Breakfast" | "Lunch" | "Dinner"
    signature:boolean
    restName:string
}