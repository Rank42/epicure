import * as React from 'react';

import ChefRestaurants from './ChefRestaurants';
import { fetchChefs } from "../../../config/fbConfig";
import {Chef} from "../../../interfaces/Chef";

const ChefSection: React.FC = () => {
    const [chefs, setChefs] = React.useState<Chef[]>([]);

    React.useEffect(()=>{
        fetchChefs().then((querySnapshot)=>{
            const data = querySnapshot.docs.map((doc)=> doc.data()) as Chef[];
            setChefs(data);
        });
    },[]);

    return chefs.length ? ( 
        <section className="chefSectionWrapper container">
            <div className="row">
                <div className="col s12 m5">
      <div className="card chefCard z-depth-0">
        <div className="card-image">
          <img src={chefs[0].img} alt="yossi shitrit"/>
    <span className="card-title center-align">{chefs[0].name}</span>
        </div>
      </div>
    </div>
        <div className="col s12 m6 chefDescription">
            <p>{chefs[0].description}</p>
        </div>
            </div>
            <ChefRestaurants chefName={chefs[0].name} restaurants={chefs[0].restaurants}/>
        </section>
     ): null;
}
 
export default ChefSection;