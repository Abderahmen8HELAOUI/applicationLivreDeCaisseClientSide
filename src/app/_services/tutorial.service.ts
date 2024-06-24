import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private baseUrl = environment.baseUrl;

  constructor() { }
}
