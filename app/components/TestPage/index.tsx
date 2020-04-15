import * as React from 'react';

import AccountNumber from 'components/AccountNumber';
import Button from 'components/Button';
import Currency from 'components/Currency';
import CustomerName from 'components/CustomerName';
import DateStamp from 'components/DateStamp';
import Footer from 'components/Footer';
import Hyperlink from 'components/Hyperlink';
import PhoneNumber from 'components/PhoneNumber';
import ProductList from 'components/ProductList';
import SelectLanguage from 'components/SelectLanguage';

import { fakeProductList } from './constants';

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
    <div>
      <h4>Date Stamp component:</h4>
      <div style={indented}>
        Long/Default: <DateStamp date="2020/04/13" />
        <br />
        Short: <DateStamp date="2020/04/13" short={true} />
        <br />
        ISO Date Long: <DateStamp date="2020-03-19T13:15:30Z" />
        <br />
        ISO Date Short: <DateStamp date="2020-03-19T13:15:30Z" short={true} />
        <br />
        Invalid Date: <DateStamp date="Tuesday" />
      </div>
    </div>
    <div>
      <h4>Product List component:</h4>
      <ProductList products={fakeProductList} />
    </div>
    <div>
      <h4>Currency component:</h4>
      <Currency value={1000} />
    </div>
    <div>
      <h4>Currency component:</h4>
      <Currency value={-1.23} />
    </div>
    <div>
      <h4>Currency component:</h4>
      <Currency value=".59" />
    </div>
    <div>
      <h4>Currency component:</h4>
      <Currency value="1" />
    </div>
    <Footer />
  </div>
);

export default TestPage;
