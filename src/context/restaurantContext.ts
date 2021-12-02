import {createContext} from "react";
import { Restaurant } from "../interfaces/Restaurant";


export const RestaurantContext = createContext<Restaurant[] | []>([]);



/* const RestaurantContextProvider:JSX.Element = (props:any) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    return (
        <RestaurantContext.Provider>
        
        </RestaurantContext.Provider>
    );
}
 */
/* export default RestaurantContextProvider; */