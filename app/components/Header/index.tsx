import * as React from 'react';

import './index.less';

const Header: React.FC = (): React.ReactElement => (
    <header className="dte-wismo-header-background">
        <div className="dte-wismo-header-mobile">
            Mobile
        </div>
        <div className="dte-wismo-header-desktop">
            Desktop
        </div>
    </header>
);

export default Header;
