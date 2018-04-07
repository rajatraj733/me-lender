import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BorrowerListComponent} from "./borrower-list/borrower-list.component";
import {NewBorrowerListComponent} from "./new-borrower-list/new-borrower-list.component";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";
import {BorrowerDetailsComponent} from "./borrower-details/borrower-details.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent},
    { path: "borrower-list", component: BorrowerListComponent},
    { path: "new-borrower-list", component: NewBorrowerListComponent},
    { path: "add-transaction/:name/:mode", component: AddTransactionComponent},
    { path: "borrower-details/:name", component: BorrowerDetailsComponent},
    { path: "items", component: ItemsComponent },
    { path: "items/item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }