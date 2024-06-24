import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganismService {
  private baseUrl = environment.baseUrl;

  constructor() { }
}
