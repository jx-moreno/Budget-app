import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss']
})
export class AddBudgetComponent implements OnInit {
  amount:number;
  wrongAmount: boolean;

  constructor(private _budgetService: BudgetService, 
              private router: Router) {
    this.amount = 0;
    this.wrongAmount = false;
  }

  ngOnInit(): void {
    
  }

  addBudget(){
    if (this.amount > 0) {
     
      this.wrongAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remaining = this.amount;
      this.router.navigate(['/bills'])
    }else {
      this.wrongAmount = true;
    }
  }
}
