/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';

import './index.less';

import ExternalHyperlink from './ExternalHyperlink';
import LocalHyperlink from './LocalHyperlink';
import { IHyperlinkProps } from './types';

const isLocalUrl = (href: string): boolean => {
  const regex = /(http|https):\/\/.*/;

  return !regex.test(href);
};

const Hyperlink: React.FC<IHyperlinkProps> = (props: IHyperlinkProps): React.ReactElement => {
  const { alt, children, href, target } = props;

  const isLocal = isLocalUrl(href);

  if (isLocal) {
    return (
      <LocalHyperlink href={`${href}`} target={target || '_self'}>
        {children}
      </LocalHyperlink>
    );
  }

  return (
    <ExternalHyperlink alt={alt} href={`${href}`} target={target || '_blank'}>
      {children}
    </ExternalHyperlink>
  );
};

export default Hyperlink;
