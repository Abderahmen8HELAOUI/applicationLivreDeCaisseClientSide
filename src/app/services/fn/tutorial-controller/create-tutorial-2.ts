/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tutorial } from '../../models/tutorial';

export interface CreateTutorial2$Params {
  organismId: string;
      body: Tutorial
}

export function createTutorial2(http: HttpClient, rootUrl: string, params: CreateTutorial2$Params, context?: HttpContext): Observable<StrictHttpResponse<Tutorial>> {
  const rb = new RequestBuilder(rootUrl, createTutorial2.PATH, 'post');
  if (params) {
    rb.path('organismId', params.organismId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tutorial>;
    })
  );
}

createTutorial2.PATH = '/api/organisms/{organismId}/tutorials';
