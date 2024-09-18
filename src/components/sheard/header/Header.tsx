import React from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './moblileNav/MobileNav';

const Header = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <DesktopNav/>
            </div>
            <div className="block lg:hidden">
                <MobileNav/>
            </div>

            
        </div>
    );
};

export default Header;