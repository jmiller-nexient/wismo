import React, { ReactElement } from 'react';

import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import AccountNumber from '..';

describe('<AccountNumber />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <AccountNumber value={'112233445566'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should throw an error when account number is less than 12 digits', () => {
    expect(() => shallow(<AccountNumber value={'123456'}/>)).toThrowError();
  });

  it('should throw an error when account number is more than 12 digits', () => {
    expect(() => shallow(<AccountNumber value={'1234561234567'}/>)).toThrowError();
  });
});
