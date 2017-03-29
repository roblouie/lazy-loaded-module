import { Component, OnInit } from '@angular/core';
import { SingletonService } from './singleton-service.service';


@Component({
  selector: 'sub-page',
  templateUrl: 'page-two.html'
})
export class PageTwoComponent {
  private whatsTheNumber:Number;

  constructor(private singletonService:SingletonService) {
    this.whatsTheNumber = singletonService.testValue;
  }
}
