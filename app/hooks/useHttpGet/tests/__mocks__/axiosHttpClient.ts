import { IHttpClient, IHttpResponse } from '../../types';

const mockHttpClient: IHttpClient = {
  cancel: (): void => {
    throw new Error('The request was cancelled');
  },
  // tslint:disable-next-line: typedef
  get: (url: string): Promise<IHttpResponse> => new Promise<IHttpResponse>(resolve => {
    setTimeout(() => resolve({
      data: {
        completed: true,
        id: 1,
        title: url,
        userId: 2,
      },
      status: 200,
      statusText: 'OK',
    }), 1000);
  }),
  // tslint:disable-next-line: no-any
  wasCancelled: (error: any): boolean => (!!error),
};

const axiosHttpClient = (): IHttpClient => mockHttpClient;

export default axiosHttpClient;
