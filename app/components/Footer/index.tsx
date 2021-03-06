import * as React from 'react';

import './index.less';

const Footer: React.FC = (): React.ReactElement => (
  <footer className="dte-wismo-footer">
    <div className="dte-wismo-footer-links">
      <a href="https://newlook.dteenergy.com/wps/wcm/connect/dte-web/quicklinks/footer/customer+data+privacy+policy">
        Privacy Policy
      </a>
      <a href="https://newlook.dteenergy.com/wps/wcm/connect/dte-web/quicklinks/footer/terms-and-conditions">
        Terms & Conditions
      </a>
      <a href="https://newlook.dteenergy.com/wps/wcm/connect/dte-web/quicklinks/footer/03+contact+us">Contact Us</a>
    </div>
    <div className="dte-wismo-footer-copyright">
      <p>{new Date().getFullYear()} DTE Energy. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
