import * as React from 'react';

export class ErrorBoundary extends React.PureComponent<{}> {
  constructor(props) {
    super(props);
  }

  public componentDidCatch(error: Error | null, info: object) {
    console.error(info, error);
  }

  public render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
