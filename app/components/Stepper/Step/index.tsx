import React, { FC, ReactElement } from 'react';

import Status from 'types/Status';
import StepIcon from './StepIcon';

import './index.less';

interface IStepProps {
  description: string | ReactElement;
  status: Status;
  title: string | ReactElement;
}

const Step: FC<IStepProps> = ({ description, status, title }: IStepProps): ReactElement => (
  <div className="dte-wismo-step">
    <div className={`container ${status}`}>
      <div className="tail">
        <div className="half-1" />
        <div className="half-2" />
      </div>
      <div className="icon-wrapper">
        <StepIcon status={status} />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  </div>
);

export default Step;
