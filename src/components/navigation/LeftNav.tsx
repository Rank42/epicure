import React, {FC} from 'react'

export interface LeftNavProps {
    
}
 
const LeftNav: FC<LeftNavProps> = () => {
    return ( 
        <div className="leftNav left">
        <div className="logo valign-wrapper">
            <img src="/assets/img/logo.png" alt="epicure logo"/>
            <span className="logoText">
                EPICURE
            </span>
        </div>
        <ul className="hide-on-med-and-down">
          <li><a href="/restaurants">Restaurants</a></li>
          <li><a href="#!">Chefs</a></li>
        </ul>
        </div>
     );
}
 
export default LeftNav;