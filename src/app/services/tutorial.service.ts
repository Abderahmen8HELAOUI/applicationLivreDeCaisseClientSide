import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutorial} from "../models/tutorial.model";

//const baseUrl = 'http://localhost:8080/api/tutorials';
const baseUrl = 'https://livredecaisseserverside-a315e713e62c.herokuapp.com/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }

  getTotalRecipe(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalRecipe`);
  }

  getTotalRecipeByDate(titleDate: string): Observable<number> {
    const params = new HttpParams().set('titleDate', titleDate);
    return this.http.get<number>(`${baseUrl}/totalRecipeWithOrWithoutDate`, { params });
  }

  getTotalTreasuryOperations(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalTreasuryOperations`);
  };

  getTotalRegulationOperations(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalRegulationOperation`);
  };

  getTotalExpenses(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalExpenses`);
  };

  getCurrentBalanceToday(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalCurrentBalanceToday`);
  }

  getFinalPostalCurrentAccount(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/finalPostalCurrentAccount`);
  }

  getTotalCash(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/totalCash`);
  }

  getCurrencyCashOnCashier(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/currencyCashOnCashier`);
  }

  getFinalBalanceLastMonth(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/finalBalanceLastMonth`);
  }

  getTotalTreasuryOperationsLastRow(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/treasuryOperationsLastRow`);
  }
  getTotalRegulationOperationsLastRow(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/regulationOperationsLastRow`);
  }
}
