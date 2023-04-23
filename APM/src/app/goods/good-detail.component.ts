import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodService } from './good.service';
import { IGood } from './good';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css'],
  providers: [GoodService]
})
export class GoodDetailComponent implements OnInit, OnDestroy {
  pageTitle: String;
  good: IGood | undefined;
  sub!: Subscription;
  errorMessage: String;

  // Here is the router and the route
  constructor(private route: ActivatedRoute,
              private router: Router,
              private goodService: GoodService) { 
    this.pageTitle = "Detail about good";
    this.errorMessage = ''
  }

  // ngOnInit is call at the initialisation
  ngOnInit(): void {
    // This is to get one of the http parameter desire, here for instance id
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` # ${id}`;
    this.sub = this.goodService.getGoods().subscribe({
      next: goods => {
        for(let gd of goods){
          if (gd.goodId == id){
            this.good = gd
          }
        }
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  // This is to manually routing someone to a specific place using a router
  // This is binded to a button in the html element
  onBack(): void {
    this.router.navigate(['/goods']);
  }

}
