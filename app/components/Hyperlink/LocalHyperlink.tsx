/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { IBaseHyperlinkProps } from './types';

// tslint:disable-next-line: no-empty-interface
interface ILocalHyperlinkProps extends IBaseHyperlinkProps {}

const LocalHyperlink: React.FC<ILocalHyperlinkProps> = (props: ILocalHyperlinkProps): React.ReactElement => {
  const { children, href, target } = props;

  return (
    <Link to={`${href}`} target={target || '_self'}>
      {React.Children.toArray(children)}
    </Link>
  );
};

export default LocalHyperlink;
