import React from 'react';
import renderer from 'react-test-renderer';

import DateStamp from '..';

describe('DateStamp Component', (): void => {
  it('should render long datestamp when given ISO formatted date prop', (): void => {
    const tree = renderer.create(
      <DateStamp date={'2020-03-19T13:15:30Z'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render long datestamp when short prop is false', (): void => {
    const tree = renderer.create(
      <DateStamp date={'2020/04/10'} short={false}/>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render long datestamp when short prop is not given', (): void => {
    const tree = renderer.create(
      <DateStamp date={'2020/04/10'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when given invalid date prop', (): void => {
    const tree = renderer.create(
      <DateStamp date={'Tuesday'} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render short datestamp when short prop is true', (): void => {
    const tree = renderer.create(
      <DateStamp date={'2020/04/10'} short={true}/>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render short datestamp when short prop is true and given ISO formatted date prop', (): void => {
    const tree = renderer.create(
      <DateStamp date={'2020-03-19T13:15:30Z'} short={true}/>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
