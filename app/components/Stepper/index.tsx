import React, { FC, ReactElement } from 'react';

import Status from 'types/Status';
import Step from './Step';

const Stepper: FC = (): ReactElement => (
  <div>
    <Step status={Status.Completed} title="Service Request Received" description="Monday, April 13" />
    <Step status={Status.Completed} title="Customer Identity Verification" description="Completed Monday, April 13" />
    <Step
      status={Status.Completed}
      title="Service Scheduled"
      description={
        <span>
          Monday, April 13 <a href="/orders/1">Edit Date</a>
        </span>
      }
    />
    <Step status={Status.Pending} title="Service Processed" description="" />
  </div>
);

export default Stepper;
