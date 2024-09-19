import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isActive, setIsActive}) => {

    return (
        <>
    <div className="tt-offcanvas-wrapper">
        <div className={`tt-offcanvas ${isActive ? "opened" : ""}`}>
            <div className="tt-offcanvas-close" onClick={() => setIsActive(false)}>
                <span><i className="fas fa-times"></i></span>
            </div>

               <p style={{color: "white"}}>TheSalepoint.com</p>
                <div className="mobile-nav__container"></div>

                
                <div className={`tt-mobile-menu mean-container d-xl-none`}> 
                    <div className="mean-bar">
                        <MobileMenus />
                    </div>
                </div>

                <div className="mobile-nav__container"></div>

                <div class="offset__widget offset__support">
                    <ul class="mobile-nav__contact list-unstyled">
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:rairechnologies@outlook.com">rairechnologies@outlook.com</a>
                        </li>
                        <li>
                            <i class="fa fa-phone-alt"></i>
                            <a href="tel:+1281 825 3633">281 825 3633</a>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i> 312 W 2nd St, STE # 5083, 
                            Casper WY 82601 </li>
                    </ul>
                </div>
        </div>
    </div>    

<div className={`body-overlay ${isActive ? "opened"  : ""}`} onClick={() => setIsActive(false)}></div>
        </>
    );
};

export default Sidebar;