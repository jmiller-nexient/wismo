/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import { IHyperlinkProps } from './types';

const ExternalHyperlink: React.FC<IHyperlinkProps> = (props: IHyperlinkProps): React.ReactElement => {
  const { alt, children, href, target } = props;

  return (
    <a href={`${href}`} target={target || '_blank'}>
      <img
        alt={alt || 'external-link'}
        className="dte-wismo-hyperlink-icon"
        src={require('images/external-link.svg')}
      />
      {React.Children.toArray(children)}
    </a>
  );
};

export default ExternalHyperlink;
