import React from 'react'

export interface IconMeaningProps {
    
}
 
const IconMeaning: React.FC<IconMeaningProps> = () => {
    return ( 
        <section className="iconMeaningWrapper">
            <h4 className="center-align">THE MEANING OF OUR ICONS :</h4>
            <div className="container center-align">
                <div className="spicy">
                    <img src="/assets/icons/spicy-icon.svg" alt="spicy icon"/>
                    <p>Spicy</p>
                </div>
                <div className="vegitarian">
                    <img src="/assets/icons/vegetarian-icon.svg" alt="vegetarian icon"/>
                     <p>Vegetarian</p>
                </div>
                <div className="vegan">
                    <img src="/assets/icons/vegan-icon.svg" alt="vegan icon"/>
                     <p>Vegan</p>
                </div>
            </div>
            
        </section>
    );
}
 
export default IconMeaning;