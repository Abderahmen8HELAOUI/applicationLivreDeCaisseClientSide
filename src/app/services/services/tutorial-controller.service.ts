/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTutorial } from '../fn/tutorial-controller/create-tutorial';
import { CreateTutorial$Params } from '../fn/tutorial-controller/create-tutorial';
import { createTutorial2 } from '../fn/tutorial-controller/create-tutorial-2';
import { CreateTutorial2$Params } from '../fn/tutorial-controller/create-tutorial-2';
import { deleteAllTutorials } from '../fn/tutorial-controller/delete-all-tutorials';
import { DeleteAllTutorials$Params } from '../fn/tutorial-controller/delete-all-tutorials';
import { deleteTutorial } from '../fn/tutorial-controller/delete-tutorial';
import { DeleteTutorial$Params } from '../fn/tutorial-controller/delete-tutorial';
import { findByPublished } from '../fn/tutorial-controller/find-by-published';
import { FindByPublished$Params } from '../fn/tutorial-controller/find-by-published';
import { getAllCommentsByTutorialId } from '../fn/tutorial-controller/get-all-comments-by-tutorial-id';
import { GetAllCommentsByTutorialId$Params } from '../fn/tutorial-controller/get-all-comments-by-tutorial-id';
import { getAllTutorials } from '../fn/tutorial-controller/get-all-tutorials';
import { GetAllTutorials$Params } from '../fn/tutorial-controller/get-all-tutorials';
import { getAllTutorialsPage } from '../fn/tutorial-controller/get-all-tutorials-page';
import { GetAllTutorialsPage$Params } from '../fn/tutorial-controller/get-all-tutorials-page';
import { getCurrencyCashOnCashier } from '../fn/tutorial-controller/get-currency-cash-on-cashier';
import { GetCurrencyCashOnCashier$Params } from '../fn/tutorial-controller/get-currency-cash-on-cashier';
import { getFinalBalanceLastMonth } from '../fn/tutorial-controller/get-final-balance-last-month';
import { GetFinalBalanceLastMonth$Params } from '../fn/tutorial-controller/get-final-balance-last-month';
import { getFinalPostalCurrentAccount } from '../fn/tutorial-controller/get-final-postal-current-account';
import { GetFinalPostalCurrentAccount$Params } from '../fn/tutorial-controller/get-final-postal-current-account';
import { getTotalCash } from '../fn/tutorial-controller/get-total-cash';
import { GetTotalCash$Params } from '../fn/tutorial-controller/get-total-cash';
import { getTotalRecipe } from '../fn/tutorial-controller/get-total-recipe';
import { GetTotalRecipe$Params } from '../fn/tutorial-controller/get-total-recipe';
import { getTutorialById } from '../fn/tutorial-controller/get-tutorial-by-id';
import { GetTutorialById$Params } from '../fn/tutorial-controller/get-tutorial-by-id';
import { totalCurrentBalanceToday } from '../fn/tutorial-controller/total-current-balance-today';
import { TotalCurrentBalanceToday$Params } from '../fn/tutorial-controller/total-current-balance-today';
import { totalExpenses } from '../fn/tutorial-controller/total-expenses';
import { TotalExpenses$Params } from '../fn/tutorial-controller/total-expenses';
import { totalRecipe } from '../fn/tutorial-controller/total-recipe';
import { TotalRecipe$Params } from '../fn/tutorial-controller/total-recipe';
import { totalRegulationOperation } from '../fn/tutorial-controller/total-regulation-operation';
import { TotalRegulationOperation$Params } from '../fn/tutorial-controller/total-regulation-operation';
import { totalRegulationOperationsLastRow } from '../fn/tutorial-controller/total-regulation-operations-last-row';
import { TotalRegulationOperationsLastRow$Params } from '../fn/tutorial-controller/total-regulation-operations-last-row';
import { totalTreasuryOperations } from '../fn/tutorial-controller/total-treasury-operations';
import { TotalTreasuryOperations$Params } from '../fn/tutorial-controller/total-treasury-operations';
import { totalTreasuryOperationsLastRow } from '../fn/tutorial-controller/total-treasury-operations-last-row';
import { TotalTreasuryOperationsLastRow$Params } from '../fn/tutorial-controller/total-treasury-operations-last-row';
import { Tutorial } from '../models/tutorial';
import { updateTutorial } from '../fn/tutorial-controller/update-tutorial';
import { UpdateTutorial$Params } from '../fn/tutorial-controller/update-tutorial';

@Injectable({ providedIn: 'root' })
export class TutorialControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTutorialById()` */
  static readonly GetTutorialByIdPath = '/api/tutorials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTutorialById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTutorialById$Response(params: GetTutorialById$Params, context?: HttpContext): Observable<StrictHttpResponse<Tutorial>> {
    return getTutorialById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTutorialById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTutorialById(params: GetTutorialById$Params, context?: HttpContext): Observable<Tutorial> {
    return this.getTutorialById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tutorial>): Tutorial => r.body)
    );
  }

  /** Path part for operation `updateTutorial()` */
  static readonly UpdateTutorialPath = '/api/tutorials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTutorial()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTutorial$Response(params: UpdateTutorial$Params, context?: HttpContext): Observable<StrictHttpResponse<Tutorial>> {
    return updateTutorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTutorial$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTutorial(params: UpdateTutorial$Params, context?: HttpContext): Observable<Tutorial> {
    return this.updateTutorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tutorial>): Tutorial => r.body)
    );
  }

  /** Path part for operation `deleteTutorial()` */
  static readonly DeleteTutorialPath = '/api/tutorials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTutorial()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTutorial$Response(params: DeleteTutorial$Params, context?: HttpContext): Observable<StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>> {
    return deleteTutorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTutorial$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTutorial(params: DeleteTutorial$Params, context?: HttpContext): Observable<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'> {
    return this.deleteTutorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>): '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED' => r.body)
    );
  }

  /** Path part for operation `getAllTutorialsPage()` */
  static readonly GetAllTutorialsPagePath = '/api/tutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTutorialsPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsPage$Response(params?: GetAllTutorialsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {
    return getAllTutorialsPage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTutorialsPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorialsPage(params?: GetAllTutorialsPage$Params, context?: HttpContext): Observable<{
[key: string]: {
};
}> {
    return this.getAllTutorialsPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>): {
[key: string]: {
};
} => r.body)
    );
  }

  /** Path part for operation `createTutorial()` */
  static readonly CreateTutorialPath = '/api/tutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTutorial()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial$Response(params: CreateTutorial$Params, context?: HttpContext): Observable<StrictHttpResponse<Tutorial>> {
    return createTutorial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTutorial$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial(params: CreateTutorial$Params, context?: HttpContext): Observable<Tutorial> {
    return this.createTutorial$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tutorial>): Tutorial => r.body)
    );
  }

  /** Path part for operation `deleteAllTutorials()` */
  static readonly DeleteAllTutorialsPath = '/api/tutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAllTutorials()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllTutorials$Response(params?: DeleteAllTutorials$Params, context?: HttpContext): Observable<StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>> {
    return deleteAllTutorials(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAllTutorials$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllTutorials(params?: DeleteAllTutorials$Params, context?: HttpContext): Observable<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'> {
    return this.deleteAllTutorials$Response(params, context).pipe(
      map((r: StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>): '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED' => r.body)
    );
  }

  /** Path part for operation `getAllCommentsByTutorialId()` */
  static readonly GetAllCommentsByTutorialIdPath = '/api/organisms/{organismId}/tutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCommentsByTutorialId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCommentsByTutorialId$Response(params: GetAllCommentsByTutorialId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tutorial>>> {
    return getAllCommentsByTutorialId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCommentsByTutorialId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCommentsByTutorialId(params: GetAllCommentsByTutorialId$Params, context?: HttpContext): Observable<Array<Tutorial>> {
    return this.getAllCommentsByTutorialId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tutorial>>): Array<Tutorial> => r.body)
    );
  }

  /** Path part for operation `createTutorial2()` */
  static readonly CreateTutorial2Path = '/api/organisms/{organismId}/tutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTutorial2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial2$Response(params: CreateTutorial2$Params, context?: HttpContext): Observable<StrictHttpResponse<Tutorial>> {
    return createTutorial2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTutorial2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTutorial2(params: CreateTutorial2$Params, context?: HttpContext): Observable<Tutorial> {
    return this.createTutorial2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tutorial>): Tutorial => r.body)
    );
  }

  /** Path part for operation `totalTreasuryOperationsLastRow()` */
  static readonly TotalTreasuryOperationsLastRowPath = '/api/tutorials/treasuryOperationsLastRow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalTreasuryOperationsLastRow()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalTreasuryOperationsLastRow$Response(params?: TotalTreasuryOperationsLastRow$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalTreasuryOperationsLastRow(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalTreasuryOperationsLastRow$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalTreasuryOperationsLastRow(params?: TotalTreasuryOperationsLastRow$Params, context?: HttpContext): Observable<number> {
    return this.totalTreasuryOperationsLastRow$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalTreasuryOperations()` */
  static readonly TotalTreasuryOperationsPath = '/api/tutorials/totalTreasuryOperations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalTreasuryOperations()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalTreasuryOperations$Response(params?: TotalTreasuryOperations$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalTreasuryOperations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalTreasuryOperations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalTreasuryOperations(params?: TotalTreasuryOperations$Params, context?: HttpContext): Observable<number> {
    return this.totalTreasuryOperations$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalRegulationOperation()` */
  static readonly TotalRegulationOperationPath = '/api/tutorials/totalRegulationOperation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalRegulationOperation()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRegulationOperation$Response(params?: TotalRegulationOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalRegulationOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalRegulationOperation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRegulationOperation(params?: TotalRegulationOperation$Params, context?: HttpContext): Observable<number> {
    return this.totalRegulationOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalRecipe()` */
  static readonly TotalRecipePath = '/api/tutorials/totalRecipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalRecipe()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRecipe$Response(params?: TotalRecipe$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalRecipe(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalRecipe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRecipe(params?: TotalRecipe$Params, context?: HttpContext): Observable<number> {
    return this.totalRecipe$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getTotalRecipe()` */
  static readonly GetTotalRecipePath = '/api/tutorials/totalRecipeWithOrWithoutDate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalRecipe()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalRecipe$Response(params?: GetTotalRecipe$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getTotalRecipe(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTotalRecipe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalRecipe(params?: GetTotalRecipe$Params, context?: HttpContext): Observable<number> {
    return this.getTotalRecipe$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalExpenses()` */
  static readonly TotalExpensesPath = '/api/tutorials/totalExpenses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalExpenses()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalExpenses$Response(params?: TotalExpenses$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalExpenses(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalExpenses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalExpenses(params?: TotalExpenses$Params, context?: HttpContext): Observable<number> {
    return this.totalExpenses$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalCurrentBalanceToday()` */
  static readonly TotalCurrentBalanceTodayPath = '/api/tutorials/totalCurrentBalanceToday';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalCurrentBalanceToday()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalCurrentBalanceToday$Response(params?: TotalCurrentBalanceToday$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalCurrentBalanceToday(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalCurrentBalanceToday$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalCurrentBalanceToday(params?: TotalCurrentBalanceToday$Params, context?: HttpContext): Observable<number> {
    return this.totalCurrentBalanceToday$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getTotalCash()` */
  static readonly GetTotalCashPath = '/api/tutorials/totalCash';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalCash()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalCash$Response(params?: GetTotalCash$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getTotalCash(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTotalCash$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalCash(params?: GetTotalCash$Params, context?: HttpContext): Observable<number> {
    return this.getTotalCash$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `totalRegulationOperationsLastRow()` */
  static readonly TotalRegulationOperationsLastRowPath = '/api/tutorials/regulationOperationsLastRow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalRegulationOperationsLastRow()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRegulationOperationsLastRow$Response(params?: TotalRegulationOperationsLastRow$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return totalRegulationOperationsLastRow(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalRegulationOperationsLastRow$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalRegulationOperationsLastRow(params?: TotalRegulationOperationsLastRow$Params, context?: HttpContext): Observable<number> {
    return this.totalRegulationOperationsLastRow$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findByPublished()` */
  static readonly FindByPublishedPath = '/api/tutorials/published';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPublished()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPublished$Response(params?: FindByPublished$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {
    return findByPublished(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPublished$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPublished(params?: FindByPublished$Params, context?: HttpContext): Observable<{
[key: string]: {
};
}> {
    return this.findByPublished$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>): {
[key: string]: {
};
} => r.body)
    );
  }

  /** Path part for operation `getFinalPostalCurrentAccount()` */
  static readonly GetFinalPostalCurrentAccountPath = '/api/tutorials/finalPostalCurrentAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFinalPostalCurrentAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFinalPostalCurrentAccount$Response(params?: GetFinalPostalCurrentAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getFinalPostalCurrentAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFinalPostalCurrentAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFinalPostalCurrentAccount(params?: GetFinalPostalCurrentAccount$Params, context?: HttpContext): Observable<number> {
    return this.getFinalPostalCurrentAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getFinalBalanceLastMonth()` */
  static readonly GetFinalBalanceLastMonthPath = '/api/tutorials/finalBalanceLastMonth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFinalBalanceLastMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFinalBalanceLastMonth$Response(params?: GetFinalBalanceLastMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getFinalBalanceLastMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFinalBalanceLastMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFinalBalanceLastMonth(params?: GetFinalBalanceLastMonth$Params, context?: HttpContext): Observable<number> {
    return this.getFinalBalanceLastMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getCurrencyCashOnCashier()` */
  static readonly GetCurrencyCashOnCashierPath = '/api/tutorials/currencyCashOnCashier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyCashOnCashier()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyCashOnCashier$Response(params?: GetCurrencyCashOnCashier$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getCurrencyCashOnCashier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyCashOnCashier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyCashOnCashier(params?: GetCurrencyCashOnCashier$Params, context?: HttpContext): Observable<number> {
    return this.getCurrencyCashOnCashier$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllTutorials()` */
  static readonly GetAllTutorialsPath = '/api/sortedtutorials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTutorials()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorials$Response(params?: GetAllTutorials$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tutorial>>> {
    return getAllTutorials(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTutorials$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTutorials(params?: GetAllTutorials$Params, context?: HttpContext): Observable<Array<Tutorial>> {
    return this.getAllTutorials$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tutorial>>): Array<Tutorial> => r.body)
    );
  }

}
