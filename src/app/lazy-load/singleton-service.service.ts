import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SingletonService {
  public testValue: Number;

  constructor(private http: Http) {}

}

