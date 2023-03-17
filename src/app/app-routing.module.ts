import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { BillsComponent } from './components/bills/bills.component';

const routes: Routes = [
  { path:'', redirectTo: '/addBudget', pathMatch:'full' },
  { path:'addBudget', component: AddBudgetComponent },
  { path:'bills', component: BillsComponent },
  { path:'**', redirectTo:'/addBudget', pathMatch:'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
