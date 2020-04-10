import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import PhoneNumber from '..';
import {shallow} from 'enzyme';

describe('<PhoneNumber />', () => {
  it('should render correctly when phone number has 10 characters', () => {
    const tree: ReactElement = renderer.create(
      <PhoneNumber value={'1122334455'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when phone number has 7 characters', () => {
    const tree: ReactElement = renderer.create(
      <PhoneNumber value={'1122334'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should throw an error when phone number is not 10 or 7 characters', () => {
    expect(() => shallow(<PhoneNumber value={'123456'}/>)).toThrowError();
  });

  it('should throw an error when phone number is more than 10 characters', () => {
    expect(() => shallow(<PhoneNumber value={'12345678910'}/>)).toThrowError();
  });
});
