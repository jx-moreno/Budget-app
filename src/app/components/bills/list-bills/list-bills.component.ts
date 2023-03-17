import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.scss']
})
export class ListBillsComponent implements OnInit,OnDestroy {

  subscription : Subscription;
  budget : number;
  remaining : number;
  listBills: any[] = [];

  constructor(private _budgetService : BudgetService ){
    this.budget = 0;
    this.remaining =0;
    this.subscription = this._budgetService.getBill().subscribe(data => {
      this.remaining = this.remaining - data.amount;
      this.listBills.push(data);
    });

  }
  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  applyRemainingColor(){
    if (this.budget / 4 > this.remaining) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.remaining ) {
      return 'alert alert-warning';
    }
    else {
      return 'alert alert-secondary';
    }
  }

}
