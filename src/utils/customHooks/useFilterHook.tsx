import React, {useState} from "react";
import moment from "moment-timezone";

import { Restaurant } from "../../interfaces/Restaurant";
import Card from '../../components/shared/Card';

// Define how hook props will look
type FilterParam = "all" | "new" | "popular" | "open";

// Define hook Type
type FilterHook = (restaurants:Restaurant[], initialState:FilterParam) => any;

// Export custom useFilter hook
export const useFilter:FilterHook = (restaurants:Restaurant[], initialState:FilterParam = 'all') =>{
    const [filterParam, setFilterParam] = useState<FilterParam>(initialState);

// Compare restaurant openTime and closeTime to current users timezone time
    const compareTime = (openTime:string | undefined, closeTime:string | undefined):boolean =>{
        // Get users timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Get users current time depending on timezone and format the date
        const now = moment.tz(timezone);
        const date = now.format("YYYY-MM-DD");
        // Format restaurant open and close times by moment.tz so it can compare between them
        const restOpenTime = moment.tz(date + ' ' + openTime, "YYYY-MM-DD h:mmA", timezone);
        const restCloseTime = moment.tz(date + ' ' + closeTime, "YYYY-MM-DD h:mmA", timezone);
        // Compare restaurant open and close times to current time and return 
        if(restCloseTime.isBefore(restOpenTime)) return now.isAfter(restOpenTime) || now.isBefore(restCloseTime);
        else return now.isBetween(restOpenTime, restCloseTime, null, '[)');
    }

    // Compare restaurant dateAdded to a month ago
    const compareDate = (dateAdded:any):boolean =>{
        // Get current Date
        const date = new Date();
        // Convert firebase timestamp to Date object and then get time in miliseconds
        const restDate = dateAdded.toDate().getTime();
        // Get date from a month ago and convert to miliseconds
        const monthAgo = date.setMonth(date.getMonth() - 1);
        // Compare the two dates and return a boolean depending on that
        return restDate > monthAgo;
    }

     const determineRenderingByFilter = () =>{
        // Determine which restaurants to render depending on filterParam decided by user, default is 'all'
        if(filterParam === 'new'){
            // Filter to see which restaurants are the ones added up to a month ago
            const filterByDate = restaurants.filter((rest)=> compareDate(rest.dateAdded));
            // Render filtered restaurants
            return ( filterByDate.map((rest)=>(<Card key={rest.name} img={rest.img} name={rest.name} chef={rest.chef} cardClass="col s6 m4 restDashCard" />)))
        } else if (filterParam === 'popular'){
            // Sort by comparing amount of favorites
            const sortByPopularity = restaurants.sort((a, b)=>  b.favorites! - a.favorites!);
            // Render sorted restaurants
            return ( sortByPopularity.map((rest)=>(<Card  key={rest.name} img={rest.img} name={rest.name} chef={rest.chef} cardClass="col s6 m4 restDashCard" />)))
        } else if (filterParam === 'open'){
            // Filter by comparing open and close time to current time
            const filteredByTime = restaurants.filter((rest)=> compareTime(rest.openTime, rest.closeTime));
            // Render filtered restaurants
            return ( filteredByTime.map((rest)=>(<Card key={rest.name} img={rest.img} name={rest.name} chef={rest.chef} cardClass="col s6 m4 restDashCard" />)))
        } else return ( restaurants.map((rest)=>(<Card key={rest.name} img={rest.img} name={rest.name} chef={rest.chef} cardClass="col s6 m4 restDashCard" />)));
    }

    return {
        determineRenderingByFilter,
        setFilterParam
    }
}