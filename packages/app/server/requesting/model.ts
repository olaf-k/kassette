// ------------------------------------------------------------------------- std

import { IncomingHttpHeaders } from 'http';

// -------------------------------------------------------------------- internal

import { IFetchedServerResponse } from '../server-response/model';
import { IFetchedRequest } from '../request/model';

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Content of an HTTP request.
 * @public
 */
export interface RequestPayload {
  /**
   * HTTP url
   */
  url: string;

  /**
   * HTTP method
   */
  method: string;

  /**
   * HTTP headers
   */
  headers: IncomingHttpHeaders;

  /**
   * HTTP request body
   */
  body: string | Buffer;
}

export interface SendRequestSpec {
  baseUrl: string;
  original: IFetchedRequest;
  skipLog?: boolean;
}

export interface SendRequestOutput {
  response: IFetchedServerResponse;
  time: number;
  requestOptions: RequestPayload;
}
