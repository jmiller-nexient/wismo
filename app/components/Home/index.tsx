import * as React from 'react';

import AccountNumber from '../AccountNumber';
import CustomerName from '../CustomerName';

import config from 'config';
import './index.less';

const Home: React.FC = () => (
  <div className="dte-home">
    <h1>Hello, WISMO!</h1>
    <h2>This is the {config.greeting}</h2>
    <div>
      <h4>Account Number component:</h4>
      <AccountNumber value={'927530986753'}/>
      <h4>Customer Name component:</h4>
      <CustomerName firstName={'Adam'} lastName={'Naglich'}/>
    </div>
  </div>
);

export default Home;
