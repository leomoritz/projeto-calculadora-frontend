import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-page',
  templateUrl: './sum-page.component.html',
  styleUrls: ['./sum-page.component.css']
})
export class SumPageComponent implements OnInit {

  @Input() valoresCalculo: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
