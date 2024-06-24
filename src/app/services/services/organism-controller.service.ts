/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTutorial1 } from '../fn/organism-controller/create-tutorial-1';
import { CreateTutorial1$Params } from '../fn/organism-controller/create-tutorial-1';
import { getAllTutorialsPage1 } from '../fn/organism-controller/get-all-tutorials-page-1';
import { GetAllTutorialsPage1$Params } from '../fn/organism-controller/get-all-tutorials-page-1';
import { Organism } from '../models/organism';

@Injectable({ providedIn: 'root' })
export class OrganismControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllTutorialsPage1()` */
  static readonly GetAllTutorialsPage1Path = '/api/organisms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTutorialsPage1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsPage1$Response(params?: GetAllTutorialsPage1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {
    return getAllTutorialsPage1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTutorialsPage1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsPage1(params?: GetAllTutorialsPage1$Params, context?: HttpContext): Observable<{
[key: string]: {
};
}> {
    return this.getAllTutorialsPage1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>): {
[key: string]: {
};
} => r.body)
    );
  }

  /** Path part for operation `createTutorial1()` */
  static readonly CreateTutorial1Path = '/api/organisms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTutorial1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial1$Response(params: CreateTutorial1$Params, context?: HttpContext): Observable<StrictHttpResponse<Organism>> {
    return createTutorial1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTutorial1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial1(params: CreateTutorial1$Params, context?: HttpContext): Observable<Organism> {
    return this.createTutorial1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Organism>): Organism => r.body)
    );
  }

}
