import React from 'react';

export interface SearchProps {
    isNav:boolean;
    handleChange():void;
}
 
const Search: React.FC<SearchProps> = ({isNav, handleChange}) => {
    return isNav ? (
        <div className=" container searchNav input-field">
                    <input type="text" name="searchParam" placeholder="Search for restaurant cuisine, chef" onChange={handleChange}/>
                    <img className="prefix" src="/assets/icons/search-icon.svg" alt="search"/>
                </div>
    ):( 
        <div className="container searchHero input-field">
                    <img className="prefix" src="/assets/icons/search-icon.svg" alt="search"/>
                    <input type="text" name="searchParam" placeholder="Search for restaurant cuisine, chef" onChange={handleChange}/>
                </div>
     );
}
 
export default Search;