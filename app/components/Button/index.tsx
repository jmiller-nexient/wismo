import React from 'react';
import classnames from 'classnames';

export type ButtonHtmlType = 'button' | 'reset' | 'submit';
export type ButtonTypes = 'primary' | 'secondary';

export interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  htmlType?: ButtonHtmlType;
  id?: string;
  onClick?: () => void;
  type?: ButtonTypes;
}

const getClasses = (className?: string, type?: ButtonTypes): string =>
  classnames(className, {
    'dte-wismo-button': true,
    'dte-wismo-button-primary': !type || type === 'primary',
    'dte-wismo-button-secondary': type === 'secondary',
  });

const Button: React.FC<IButtonProps> = (props: IButtonProps): React.ReactElement => {
  const { children, className, disabled, htmlType, id, onClick, type } = props;

  const classes: string = getClasses(className, type);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} disabled={disabled} id={id} onClick={onClick} type={htmlType}>
      {React.Children.toArray(children)}
    </button>
  );
};

export default Button;
