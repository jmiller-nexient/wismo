import * as React from 'react';

import AccountNumber from 'components/AccountNumber';
import Button from 'components/Button';
import CustomerName from 'components/CustomerName';
import Hyperlink from 'components/Hyperlink';
import PhoneNumber from 'components/PhoneNumber';
import SelectLanguage from 'components/SelectLanguage';

const indented = {
  marginLeft: '20px',
};

const TestPage: React.FC = (): React.ReactElement => (
  <div>
    <h1>This is the test\demo page for custom components</h1>
    <div>
      <SelectLanguage />
    </div>
    <div>
      <h4>Account Number component:</h4>
      <div style={indented}>
        <AccountNumber value="927530986753" />
      </div>
    </div>
    <div>
      <h4>Button component:</h4>
      <div style={indented}>
        <Button type="primary">Primary</Button>
        &nbsp;
        <Button disabled type="primary">
          Primary (Disabled)
        </Button>
        &nbsp;
        <Button type="secondary">Secondary</Button>
        &nbsp;
        <Button disabled type="secondary">
          Secondary (Disabled)
        </Button>
      </div>
    </div>
    <div>
      <h4>Customer Name component:</h4>
      <div style={indented}>
        <CustomerName firstName="Adam" lastName="Naglich" />
      </div>
    </div>
    <div>
      <h4>Hyperlink component:</h4>
      <div style={indented}>
        Internal URL: <Hyperlink href="/">Home</Hyperlink>
        <br />
        External URL: <Hyperlink href="http://www.dteenergy.com">DTE Energy</Hyperlink>
      </div>
    </div>
    <div>
      <h4>Phone Number component:</h4>
      <div style={indented}>
        7-Digits: <PhoneNumber value="1234567" />
        <br />
        10-Digits: <PhoneNumber value="1234567890" />
      </div>
    </div>
  </div>
);

export default TestPage;
