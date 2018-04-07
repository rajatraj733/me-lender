import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BorrowerService} from "./services/borrower.service";
import {BorrowerListComponent} from "./borrower-list/borrower-list.component";
import {NewBorrowerListComponent} from "./new-borrower-list/new-borrower-list.component";
import {ContactService} from "./services/contact.service";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {FireStoreService} from "./services/firestore.service";
import {BorrowerDetailsComponent} from "./borrower-details/borrower-details.component";
import {TransactionService} from "./services/transaction.service";
import {ActivityIndicatorComponent} from "./activity-indicator/activity-indicator.component";
import {ActivityIndicatorService} from "./services/activity-indicator.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        DashboardComponent,
        BorrowerListComponent,
        NewBorrowerListComponent,
        AddTransactionComponent,
        BorrowerDetailsComponent,
        ActivityIndicatorComponent
    ],
    providers: [
        ItemService,
        BorrowerService,
        ContactService,
        FireStoreService,
        TransactionService,
        ActivityIndicatorService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
