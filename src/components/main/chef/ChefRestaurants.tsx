import React from 'react'
import Card from '../../shared/Card';

export interface ChefRestaurantsProps {
    chefName:string
    restaurants:string[]
}
 
const ChefRestaurants: React.FC<ChefRestaurantsProps> = ({chefName, restaurants}) => {

    const chefFirstName = chefName.split(" ",2)[0];
    
    return ( <div className="chefRestaurantsWrapper">
        <h6>{`${chefFirstName}'s restaurants :`}</h6>
            <div className="row">
                {restaurants.map((rest)=>(<div key={rest}><Card name={rest} img="/assets/img/onza.png" cardClass="chefRestaurantCard col s6 m4"/></div>))}
            </div>
    </div> );
}
 
export default ChefRestaurants;