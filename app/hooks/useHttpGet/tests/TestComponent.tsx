import React from 'react';

import useHttpGet from '..';

interface ITestComponentProps {
  id?: number;
}

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const renderCurrentState = (data: Todo | null, error: Error | null, loading: boolean): React.ReactNode => {
  if (loading) {
    return <div data-testid="loading">loading...</div>;
  }

  if (error) {
    return <div data-testid="error">{error.toString()}</div>;
  }

  return data ? (
    // <div data-testid="data">
    //   <div>Title: {data.title}</div>
    //   <div>ID: {data.id}</div>
    //   <div>User ID: {data.userId}</div>
    //   <div>Complete: {data.completed ? 'Yes' : 'No'}</div>
    // </div>
    <div data-testid="data">{data.title}</div>
  ) : null;
};

// tslint:disable-next-line: typedef
const TestComponent: React.FC<ITestComponentProps> = (props: ITestComponentProps) => {
  const { id = 1 } = props;

  const { cancel, data, error, loading, refresh } = useHttpGet<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return (
    <>
      {renderCurrentState(data, error, loading)}
      <button data-testid="cancelButton" onClick={cancel} type="button">
        Cancel
      </button>
      <button data-testid="refreshButton" onClick={refresh} type="button">
        Refresh
      </button>
    </>
  );
};

export default TestComponent;
