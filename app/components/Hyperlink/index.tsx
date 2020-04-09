/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';

import './index.less';

type Target = '_blank' | '_parent' | '_self' | '_top';

interface HyperlinkProps {
  alt?: string | null;
  children?: React.ReactNode;
  href: string;
  target?: Target;
}

const Hyperlink: React.FC<HyperlinkProps> = (props: HyperlinkProps): React.ReactElement => {
  const { alt, children, href, target } = props;

  const ExternalIcon =
    href && href.includes(window.location.hostname) ? null : (
      <img
        alt={alt || 'external-link'}
        className="dte-wismo-hyperlink-icon"
        src={require('images/external-link.svg')}
      />
    );

  return (
    <a href={`${href}`} target={target || (ExternalIcon ? '_blank' : '_self')}>
      {ExternalIcon}
      {React.Children.toArray(children)}
    </a>
  );
};

export default Hyperlink;
