import React from 'react'

export interface AboutUsProps {
    
}
 
const AboutUs: React.FC<AboutUsProps> = () => {




    return ( <section className="aboutUsWrapper">
        <div className="row container">
            <div className="col s6">
                <h5 className="aboutUsTitle">
                    ABOUT US :
                </h5>
                <p className="aboutUsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
 turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.
</p>
<div className="downloadIcons">
    <div className="appleIconWrapper">
        <img src="/assets/icons/apple-icon.svg" alt="apple icon"/>
        <div className="appleText">
        <span >Download on the</span>
        <span className="bigText">App Store</span>
        </div>
    </div>
    <div className="playIconWrapper">
        <img src="/assets/icons/play-icon.svg" alt="google play icon"/>
        <div className="playText">
        <span>Get it on</span>
        <span className="bigText">Google Play</span>
        </div>
    </div>
</div>
            </div>
            <div className="col s6 logoWrapper center-align">
                <img className="epicureLogo " src="/assets/img/about-logo.png" alt="epicure logo"/>
            </div>
        </div>
    </section> );
}
 
export default AboutUs;