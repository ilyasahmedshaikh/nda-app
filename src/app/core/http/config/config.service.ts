import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public tables: any = { 
    nda: 'nda',
    users: 'users'
  }

  constructor() { }
}
