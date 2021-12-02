import React from 'react'

import {useForm} from "../../utils/customHooks/useFormHook";
import Search from '../shared/Search';

export interface HeroSectionProps {
    
}
 
const HeroSection: React.FC<HeroSectionProps> = () => {
    const {values, handleChange, onSubmit} = useForm(handleSearch, {searchParam:''});

    function handleSearch():void{
        console.log(values);
    }

    return ( 
        <section className="heroWrapper">
            <div className="searchBox center-align">
                    <h2>Epicure works with the top
                        <br/>
chef restaurants in Tel Aviv</h2>
                <form onSubmit={onSubmit}>
                <Search isNav={false} handleChange={handleChange}/>
                </form>
            </div>
        </section>
     );
}
 
export default HeroSection;