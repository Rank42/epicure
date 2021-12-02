import React, { useEffect, useState } from 'react';

import { fetchRestaurants } from '../../config/fbConfig';
import { Restaurant } from '../../interfaces/Restaurant';
import { useFilter } from '../../utils/customHooks/useFilterHook';


const RestaurantsDashboard: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const {determineRenderingByFilter, setFilterParam} = useFilter(restaurants, 'all');

    useEffect(()=>{
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        fetchRestaurants().then((querySnapshot)=>{
            const data = querySnapshot.docs.map((doc)=> doc.data()) as Restaurant[];
            setRestaurants(data);
        });
    }, []);

    return ( <main className="restDashboardWrapper container">
        <div className="row filterLinksWrapper container">
            <ul className="filterLinks">
                    <li onClick={()=> setFilterParam('all')}>All</li>
                    <li onClick={()=> setFilterParam('new')}>New</li>
                    <li onClick={()=> setFilterParam('popular')}>Most Popular</li>
                    <li onClick={()=> setFilterParam('open')}>Open Now</li>
                </ul>
        </div>
        <div className="row  restDashCardWrapper">
            {restaurants.length ? determineRenderingByFilter() : null}
        </div>
    </main> );
}
 
export default RestaurantsDashboard;