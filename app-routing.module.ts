import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TourismComponent } from './tourism/tourism.component';
import { CommerceComponent } from './commerce/commerce.component';
import { CultureComponent } from './culture/culture.component';
import { NationalityLinksComponent } from './nationality-links/nationality-links.component';
import { WellBeingComponent } from './well-being/well-being.component';

const routes: Routes = [
  { path: '', redirectTo: '/tourism', pathMatch: 'full' },
  // { path: 'nav-bar', component: NavBarComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'commerce', component: CommerceComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'nationality-links', component: NationalityLinksComponent },
  { path: 'wellbeing', component: WellBeingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
