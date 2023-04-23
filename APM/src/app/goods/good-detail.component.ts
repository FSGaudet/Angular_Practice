import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {
  pageTitle: String;
  constructor() { 
    this.pageTitle = "Detail about good"
  }

  ngOnInit(): void {
  }

}
