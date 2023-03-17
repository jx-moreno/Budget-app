import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.scss']
})
export class AddBillsComponent implements OnInit {

  budgetDescription: string;
  amount: number;
  wrongForm: boolean;
  wrongText: string;

constructor(private _budgetService: BudgetService){
  this.amount = 0;
  this.budgetDescription = '';
  this.wrongForm = false;
  this.wrongText = '';
}
  ngOnInit(): void {
    
  }


  AddBill() {

    if (this.amount > this._budgetService.remaining ) {
      this.wrongForm = true;
      this.wrongText = 'amount is greater than remaining';
      return;
    }

   if (this.budgetDescription === '' || this.amount <= 0) {
      this.wrongForm = true;
      this.wrongText = 'Incorrect amount or description';
    }else{

      //create object
      const BILL ={
        description: this.budgetDescription,
        amount: this.amount
      }
      //send object to subscriptors via subject
      this._budgetService.addBill(BILL);
      //reset form
      this.wrongForm = false;
      this.budgetDescription = '';
      this.amount = 0;
    }
  }
    

}
