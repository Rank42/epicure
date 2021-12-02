import * as React from 'react';


 
const Footer: React.FC = () => {
    return ( 
        <footer className="center-align">
            <div className="footerLinksWrapper container">
                
                <ul className="footerLinks">
                    <li>Contact Us</li>
                    <li>Term of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;