import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroDashboardComponent } from "./dashboard.component";
import { HeroListComponent } from "./hero-list.component";
import { HeroDetailComponent } from "./hero-detail.component";

const ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HeroDashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}