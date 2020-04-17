import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import TestRendererJsonType from 'types/TestRendererJsonType';

import OrderNumber from '..';

describe('<OrderNumber />', () => {
  it('should render correctly when given a valid value', () => {
    const tree: TestRendererJsonType = renderer.create(
      <OrderNumber value="112233445566" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should throw an error when order number has non-numeric characters', () => {
    expect(() =>  shallow(<OrderNumber value="ABCDEFGHIJKL" />)).toThrowError();
  });

  it('should throw an error when order number is less than 12 digits', () => {
    expect(() => shallow(<OrderNumber value="123456"/>)).toThrowError();
  });

  it('should throw an error when order number is more than 12 digits', () => {
    expect(() => shallow(<OrderNumber value="1234561234567"/>)).toThrowError();
  });
});
