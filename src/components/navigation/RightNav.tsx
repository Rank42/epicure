import React, {FC} from 'react'

import { useForm } from '../../utils/customHooks/useFormHook';
import Search from '../shared/Search';

export interface RightNavProps {
    
}
 
const RightNav: FC<RightNavProps> = () => {
  const {values, handleChange, onSubmit} = useForm(handleSearch, {searchParam:''});

  function handleSearch():void{
    console.log(values);
  }
    return ( 
        <div className="rightNav right valign-wrapper">
          <form onSubmit={onSubmit}>
          <Search isNav={true} handleChange={handleChange}/>
          </form>
          <img className="navIcon" src="/assets/icons/user-icon.svg" alt="user"/>
          <img src="/assets/icons/bag-icon.svg" alt="bag"/>
        </div>
     );
}
 
export default RightNav;