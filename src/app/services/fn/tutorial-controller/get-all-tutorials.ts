/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tutorial } from '../../models/tutorial';

export interface GetAllTutorials$Params {
  sort?: Array<string>;
}

export function getAllTutorials(http: HttpClient, rootUrl: string, params?: GetAllTutorials$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tutorial>>> {
  const rb = new RequestBuilder(rootUrl, getAllTutorials.PATH, 'get');
  if (params) {
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Tutorial>>;
    })
  );
}

getAllTutorials.PATH = '/api/sortedtutorials';
