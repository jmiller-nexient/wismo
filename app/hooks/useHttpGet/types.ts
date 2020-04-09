export interface IHttpResponse {
  // tslint:disable-next-line: no-any
  data: any;
  status: number;
  statusText: string;
}

export interface IHttpClient {
  cancel: () => void;
  get(url: string): Promise<IHttpResponse>;
  // tslint:disable-next-line: no-any
  wasCancelled: (error: any) => boolean;
}
