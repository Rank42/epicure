import * as React from 'react';

import { Restaurant } from '../../interfaces/Restaurant';
import { fetchRestaurants } from "../../config/fbConfig";
import Card from '../shared/Card';

const PopularRestaurants: React.FC = () => {
    const [popularRest, setPopularRest] = React.useState<Restaurant[]>([]);

    React.useEffect(() => {
        fetchRestaurants().then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data()) as Restaurant[];
            const filteredData = data.filter((doc) => {
                if (doc.name === 'Claro' || doc.name === 'Tiger Lilly' || doc.name === 'Lumina') {
                    return doc;
                }
                return false;
            })
            setPopularRest(filteredData);
        });
    }, []);

    return (<section className="popularRestaurantsWrapper">
        <div className="container">
            <div className="row center-align">
                <h2 className="popularHeader">THE POPULAR RESTAURANTS IN EPICURE :</h2>
            </div>
            <div className="row cardsWrapper">
                {popularRest.map((rest) => (
                    <Card key={rest.name} name={rest.name} chef={rest.chef} img={rest.img} cardClass='col s6 m4' />
                ))}
            </div>
            <div className="row allRestaurantsLink">
                <h6 className="right">All Restaurants <img src="/assets/icons/all-restaurants-arrows.svg" alt="arrows" /></h6>
            </div>
        </div>
    </section>);
}

export default PopularRestaurants;