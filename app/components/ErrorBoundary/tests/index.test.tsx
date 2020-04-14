import React from 'react';

import { mount } from 'enzyme';

import ErrorBoundary from '../index';

const ProblemComponent = () => {
  throw new Error('Error thrown from problem component');
};

describe('<ErrorBoundary/>', () => {
  it('should catch errors with componentDidCatch', () => {
    spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    mount(<ErrorBoundary><ProblemComponent/></ErrorBoundary>);
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();
  });
  it('should render props.children', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ProblemComponent/>
      </ErrorBoundary>
    );
    expect(wrapper.find(<ProblemComponent/>));
  });
});
