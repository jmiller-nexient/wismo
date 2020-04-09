import React from 'react';
import renderer from 'react-test-renderer';

import Hyperlink from '..';

const externalUrl = 'https://www.google.com';
const internalUrl = window.location.hostname;

describe('<Hyperlink />', () => {
  it('should render external link when href is for a different host', () => {
    const tree = renderer.create(
      <Hyperlink alt="external-icon" href={externalUrl}>External Link Text</Hyperlink>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render internal link when href is for the current host', () => {
    const tree = renderer.create(
      <Hyperlink alt="internal-link" href={internalUrl}>Internal Link Text</Hyperlink>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('target', () => {
    it('should be set to _blank when a target is not provided and href is for a different host', () => {
      const tree = renderer.create(
        <Hyperlink alt="external-link" href={externalUrl}>External Link Text</Hyperlink>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should be set to _self when a target is not provided and href is for the current host', () => {
      const tree = renderer.create(
        <Hyperlink alt="internal-link" href={internalUrl}>Internal Link Text</Hyperlink>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should be set to the given target when a target is provided and href is for a different host', () => {
      const tree = renderer.create(
        <Hyperlink alt="external-link" href={externalUrl} target="_top">External Link Text</Hyperlink>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should be set to the given target when a target is provided and href is for the current host', () => {
      const tree = renderer.create(
        <Hyperlink alt="internal-link" href={internalUrl} target="_top">Internal Link Text</Hyperlink>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
