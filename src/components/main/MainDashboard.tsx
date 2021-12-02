import React from 'react'
import AboutUs from './AboutUs'

import ChefSection from './chef/ChefSection'
import HeroSection from './HeroSection'
import IconMeaning from './IconMeaning'
import PopularRestaurants from './PopularRestaurants'
import SignatureDishes from './SignatureDishes'

export interface MainDashboardProps {
    
}
 
const MainDashboard: React.FC<MainDashboardProps> = () => {
    return ( <main>
        <HeroSection/>
        <PopularRestaurants/>
        <SignatureDishes/>
        <IconMeaning/>
        <ChefSection/>
        <AboutUs/>
    </main> );
}
 
export default MainDashboard;