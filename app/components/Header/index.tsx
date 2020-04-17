import * as React from 'react';

import Hyperlink from 'components/Hyperlink';

import './index.less';

const Header: React.FC = (): React.ReactElement => (
    <header className="dte-wismo-header-background">
        <div className="dte-wismo-header-mobile">
            <div className="dte-wismo-hamburger">
                <img src="../../images/Hamburger_Menu.svg"/>
            </div>
            <div>
                <img className="dte-wismo-header-logo" src="../../images/DTE_Wordmark.svg" />
            </div>
            <div className="dte-wismo-header-page-title">
                Status
            </div>
        </div>
        <div className="dte-wismo-header-desktop">
            <div className="dte-wismo-header-page-title">
                Status
            </div>
            <div>
                <img className="dte-wismo-header-logo" src="../../images/DTE_Wordmark.svg" />
            </div>
            <div className="dte-wismo-header-link">
                <Hyperlink href="www.dteenergy.com">Visit DTEEnergy.com</Hyperlink>
            </div>
        </div>
    </header>
);

export default Header;
