import React from 'react';

// import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';

import TestComponent from './TestComponent';

// The following line tells Jest to use the mock instead of the real implementation
jest.mock('./__mocks__/axiosHttpClient');

const renderTestComponent = () => {
  const component = render(<TestComponent />);

  expect(component).not.toBeNull();

  return {
    getByTestId: component.getByTestId,
    rerender: component.rerender,
  };
};

describe('useHttpGet', () => {
  describe('loading', () => {
    it('should be shown when the request is in progress', () => {
      const { getByTestId } = renderTestComponent();

      const element = getByTestId('loading');

      expect(element.textContent).toBe('loading...');
    });

    // it('should be shown when the request is refreshed', async () => {
    //   const { getByTestId, rerender } = renderTestComponent();

    //   // tslint:disable-next-line: typedef
    //   await new Promise(resolve => setTimeout(resolve, 2000));

    //   const refreshButton = getByTestId('refreshButton');

    //   fireEvent.click(refreshButton);

    //   rerender(<TestComponent />);

    //   await waitFor(() => getByTestId('loading'), { timeout: 500 });

    //   const element = getByTestId('loading');

    //   expect(element.textContent).toBe('loading...');
    // });
  });

  // it('should abort when cancelled', async () => {
  //   const { getByTestId, rerender } = renderTestComponent();

  //   const cancelButton = getByTestId('cancelButton');

  //   fireEvent.click(cancelButton);

  //   // tslint:disable-next-line: typedef
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   rerender(<TestComponent />);

  //   // await waitFor(() => getByTestId('error'), { timeout: 1500 });

  //   const element = getByTestId('error');

  //   expect(element.textContent).toBe('Cancelled');
  // });

  it('should return a single item when requesting a specific resource and the request is successful', async () => {
    const { getByTestId } = renderTestComponent();

    // tslint:disable-next-line: typedef
    await new Promise(resolve => setTimeout(resolve, 2000));

    await waitFor(() => getByTestId('data'), { timeout: 2500 });

    const element = getByTestId('data');

    expect(element.textContent).toBe('delectus aut autem');
  });

  // TODO:
  // it('should return an error when an exception occurs during the request', async () => {
  // });

  // TODO:
  // it('should return multiple items when requesting a collection resource and the request is successful', async () => {
  // });

  // TODO:
  // it('should return new data after refreshing', async () => {
  // });
});
