import { Component, OnInit } from '@angular/core';
import { SingletonService } from './singleton-service.service';


@Component({
  selector: 'about',
  templateUrl: 'page-one.html'
})
export class PageOneComponent {
  constructor(private singletonService: SingletonService) {}

  setNumber(value: Number) {
    this.singletonService.testValue = value;
  }
}
