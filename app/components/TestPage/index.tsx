import * as React from 'react';

import AccountNumber from 'components/AccountNumber';
import Button from 'components/Button';
import Currency from 'components/Currency';
import CustomerName from 'components/CustomerName';
import DateStamp from 'components/DateStamp';
import Header from 'components/Header';
import Hyperlink from 'components/Hyperlink';
import OrderNumber from 'components/OrderNumber';
import PhoneNumber from 'components/PhoneNumber';
import ProductList from 'components/ProductList';
import SelectLanguage from 'components/SelectLanguage';

import { fakeProductList } from './constants';

import './index.less';

const TestPage: React.FC = (): React.ReactElement => (
  <div className="dte-wismo-testpage">
    <Header />
    <h1>This is the test\demo page for custom components</h1>
    <div>
      <SelectLanguage />
    </div>
    <div>
      <h4>Account Number component:</h4>
      <div className="indented">
        <AccountNumber value="927530986753" />
      </div>
    </div>
    <div>
      <h4>Order Number component:</h4>
      <div>
        <OrderNumber value="123456789012" />
      </div>
    </div>
    <div>
      <h4>Button component:</h4>
      <div className="indented">
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
      <div className="indented">
        <CustomerName firstName="Adam" lastName="Naglich" />
      </div>
    </div>
    <div>
      <h4>Hyperlink component:</h4>
      <div className="indented">
        Internal URL: <Hyperlink href="/">Home</Hyperlink>
        <br />
        External URL: <Hyperlink href="http://www.dteenergy.com">DTE Energy</Hyperlink>
      </div>
    </div>
    <div>
      <h4>Phone Number component:</h4>
      <div className="indented">
        7-Digits: <PhoneNumber value="1234567" />
        <br />
        10-Digits: <PhoneNumber value="1234567890" />
      </div>
    </div>
    <div>
      <h4>Date Stamp component:</h4>
      <div className="indented">
        Long/Default: <DateStamp date="2020/04/13" />
        <br />
        Short: <DateStamp date="2020/04/13" short />
        <br />
        ISO Date Long: <DateStamp date="2020-03-19T13:15:30Z" />
        <br />
        ISO Date Short: <DateStamp date="2020-03-19T13:15:30Z" short />
        <br />
        Invalid Date: <DateStamp date="Tuesday" />
      </div>
    </div>
    <div>
      <h4>Product List component:</h4>
      <div className="indented">
        <ProductList products={fakeProductList} />
      </div>
    </div>
    <div>
      <h4>Currency component:</h4>
      <div className="indented">
        <Currency value={1000} />
      </div>
    </div>
    <div>
      <h4>Currency component:</h4>
      <div className="indented">
        <Currency value={-1.23} />
      </div>
    </div>
    <div>
      <h4>Currency component:</h4>
      <div className="indented">
        <Currency value=".59" />
      </div>
    </div>
    <div>
      <h4>Currency component:</h4>
      <div className="indented">
        <Currency value="1" />
      </div>
    </div>
    <div>
      <h4>Customer Info:</h4>
      <h4 className="customer-name indented">
        <CustomerName firstName="Adam" lastName="Naglich" />
      </h4>
      <p className="indented phone-number">
        <PhoneNumber value="1234567890" />
        <button className="edit-button" type="button">
          Edit number
        </button>
      </p>
    </div>
  </div>
);

export default TestPage;
