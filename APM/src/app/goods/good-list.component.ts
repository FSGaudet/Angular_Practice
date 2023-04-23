import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGood } from './good'
import { GoodService } from './good.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'pm-good',
    templateUrl: './good-list.component.html',
    styleUrls: ['./good-list.component.css'],
    providers: [GoodService]
})
export class GoodListComponent implements OnInit, OnDestroy{

  pageTitle: string;
  imageWidth: number;
  imageMargin: number; 
  imageVisible: boolean; 
  

  filteredGoods: IGood[];
  goods: IGood[];

  sub!: Subscription;
  errorMessage: string;

  // Private variable
  private _listFilter: string;

  // Getter
  get listFilter(): string {
    return this._listFilter;
  }
  // Setter
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredGoods = this.performFilter(value)
  }
  // Constructor that also declare and initialize a goodService
  constructor(private goodService: GoodService) {
    this.pageTitle = 'The goods';
    this.errorMessage = '';
    this.imageWidth = 50;
    this.imageMargin = 2;
    this.imageVisible = false;
    this._listFilter = '';
    this.filteredGoods = [];
    this.goods = [];
  }

  performFilter(filterBy: string): IGood[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.goods.filter((good: IGood) => 
      good.goodName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.imageVisible = !this.imageVisible
  }

  ngOnInit(): void {
    console.log('In OnInit')
    this.sub = this.goodService.getGoods().subscribe({
      next: goods => {
        this.goods = goods;
        this.filteredGoods = this.goods;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    console.log(`${message}`);
    this.pageTitle = message;
  }

}
