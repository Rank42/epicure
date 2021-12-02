import React, {useState, useEffect} from 'react'

import { Dish } from '../../interfaces/Dish';
import {fetchDishes} from "../../config/fbConfig";
import Card from '../shared/Card';

 
const SignatureDishes: React.FC = () => {
    const [signatureDishes, setSignatureDishes] = useState<Dish[]>([]);

    useEffect(() => {
        fetchDishes().then((querySnapshot)=>{
            const data = querySnapshot.docs.map((doc)=> doc.data()) as Dish[];
            setSignatureDishes(data);
        })
    }, []);

    return ( <section className="signatureDishesWrapper">
        <div className="container">
            <div className="row center-align">
                <h4>SIGNATURE DISHES OF :</h4>
            </div>
            <div className="row signatureDishes">
                {signatureDishes ? signatureDishes.map((dish)=>(
                    <div key={dish.name} className="col s6 m4">
                    <h6 className="center-align">
                        {dish.restName}
                    </h6>
                    <Card name={dish.name} img={dish.img} description={dish.description} icon={dish.icon} price={dish.price} cardClass='signatureDishCard' restName={dish.restName}/>
                    </div>
                )):(<div>No signature dishes :/</div>)}
            </div>
        </div>
    </section> );
}
 
export default SignatureDishes;