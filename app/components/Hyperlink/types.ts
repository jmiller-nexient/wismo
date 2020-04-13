import React from 'react';

export type BrowserTarget = '_blank' | '_parent' | '_self' | '_top';

export interface IBaseHyperlinkProps {
  children?: React.ReactNode;
  href: string;
  target?: BrowserTarget;
}

export interface IHyperlinkProps extends IBaseHyperlinkProps {
  alt?: string | null;
}
