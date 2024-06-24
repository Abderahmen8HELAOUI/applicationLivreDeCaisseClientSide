/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Organism } from '../../models/organism';

export interface CreateTutorial1$Params {
      body: Organism
}

export function createTutorial1(http: HttpClient, rootUrl: string, params: CreateTutorial1$Params, context?: HttpContext): Observable<StrictHttpResponse<Organism>> {
  const rb = new RequestBuilder(rootUrl, createTutorial1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Organism>;
    })
  );
}

createTutorial1.PATH = '/api/organisms';
