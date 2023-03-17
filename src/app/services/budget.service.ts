import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget: number;
  remaining: number
  private bills$ = new Subject<any>();

  constructor() { 
    this.budget = 0;
    this.remaining = 0;
  }


  addBill(bill: any){
    this.remaining = this.remaining - bill.amount;
    this.bills$.next(bill);
  }


  getBill(): Observable<any> {
    return this.bills$.asObservable();
  }
}
