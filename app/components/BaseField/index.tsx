import React, { ReactNode } from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';

import './index.less';

interface IBaseFieldProps {
  children: ReactNode;
  label: MessageDescriptor;
}

const BaseField: React.FC<IBaseFieldProps> = (props: IBaseFieldProps): React.ReactElement => {
  const { label } = props;

  return (
    <div className={'dte-wismo-base-field-section'}>
      <label className={'dte-wismo-base-field-label'}>
        <FormattedMessage {...label} />
      </label>
      <div>
        <span className={'dte-wismo-base-field-children'}>
          {React.Children.toArray(props.children)}
        </span>
      </div>
    </div>
  );
};

export default BaseField;
