export interface HttpRequest {
  method: string;
  url: string;
  signal?: AbortSignal;
  params?: object; // the request params argument eg 'userName=123&id=23'
  data?: object;
  loaderText?: string;
  loaderSubText?: string;
  headers?: object;
  options?: unknown;
}
