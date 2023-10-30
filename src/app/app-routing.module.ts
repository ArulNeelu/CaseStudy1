import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
