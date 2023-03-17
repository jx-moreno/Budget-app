import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { AddBillsComponent } from './components/bills/add-bills/add-bills.component';
import { ListBillsComponent } from './components/bills/list-bills/list-bills.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    AddBudgetComponent,
    AddBillsComponent,
    ListBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
