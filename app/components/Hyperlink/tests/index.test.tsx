import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Hyperlink from '..';
import { BrowserTarget } from '../types';

const testHyperlink = (alt: string, href: string, text: string, target?: BrowserTarget): void => {
  const tree = renderer.create(
    <Router>
      <Hyperlink alt={alt} href={href} target={target}>{text}</Hyperlink>
    </Router>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
};

const testExternalHyperlink = (target?: BrowserTarget): void => testHyperlink('external-icon', 'https://www.google.com', 'External Link Text', target);

const testLocalHyperlink = (target?: BrowserTarget): void => testHyperlink('internal-link', '/', 'Local Link Text', target);

describe('<Hyperlink />', () => {
  it('should render external link when href is for a different host', () => testExternalHyperlink());

  it('should render internal link when href is for the current host', () => testLocalHyperlink());

  describe('target', () => {
    it('should be set to _blank when a target is not provided and href is for a different host', () => testExternalHyperlink());

    it('should be set to _self when a target is not provided and href is for the current host', () => testLocalHyperlink());

    it('should be set to the given target when a target is provided and href is for a different host', () => testExternalHyperlink('_top'));

    it('should be set to the given target when a target is provided and href is for the current host', () => testLocalHyperlink('_top'));
  });
});
