import React from 'react';
import renderer from 'react-test-renderer';

import Address from '..';

describe('Address Component', () => {
  it('should not render line 2 when null', () => {
    const address = {
      line1: '123 Main St',
      line2: null,
      city: 'Bloomfield',
      state: 'MI',
      zip: '48301',
    };

    const tree = renderer.create(
      <Address {...address} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render line2 when it has a value', () => {
    const address = {
      line1: '123 Main St',
      line2: 'Apt. 213',
      city: 'Bloomfield',
      state: 'MI',
      zip: '48301',
    };

    const tree = renderer.create(
      <Address {...address} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
