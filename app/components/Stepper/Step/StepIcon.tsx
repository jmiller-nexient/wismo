import React, { FC, ReactElement } from 'react';

import CompletedIcon from 'components/Icons/CompletedIcon';
import ErrorIcon from 'components/Icons/ErrorIcon';

import Status from 'types/Status';

interface IStepIcon {
  status: Status;
}

const StepIcon: FC<IStepIcon> = ({ status }: IStepIcon): ReactElement => {
  switch (status) {
    case Status.Active:
      return <i className="icon active" />;
    case Status.Completed:
      return <CompletedIcon />;
    case Status.Error:
      return <ErrorIcon />;
    case Status.Pending:
    default:
      return <i className="icon pending" />;
  }
};

export default StepIcon;
