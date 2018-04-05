"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var borrower_service_1 = require("./services/borrower.service");
var borrower_list_component_1 = require("./borrower-list/borrower-list.component");
var new_borrower_list_component_1 = require("./new-borrower-list/new-borrower-list.component");
var contact_service_1 = require("./services/contact.service");
var add_transaction_component_1 = require("./add-transaction/add-transaction.component");
var nativescript_angular_1 = require("nativescript-angular");
var firestore_service_1 = require("./services/firestore.service");
var borrower_details_component_1 = require("./borrower-details/borrower-details.component");
var transaction_service_1 = require("./services/transaction.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                dashboard_component_1.DashboardComponent,
                borrower_list_component_1.BorrowerListComponent,
                new_borrower_list_component_1.NewBorrowerListComponent,
                add_transaction_component_1.AddTransactionComponent,
                borrower_details_component_1.BorrowerDetailsComponent
            ],
            providers: [
                item_service_1.ItemService,
                borrower_service_1.BorrowerService,
                contact_service_1.ContactService,
                firestore_service_1.FireStoreService,
                transaction_service_1.TransactionService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsdUVBQW1FO0FBQ25FLGdFQUE0RDtBQUM1RCxtRkFBOEU7QUFDOUUsK0ZBQXlGO0FBQ3pGLDhEQUEwRDtBQUMxRCx5RkFBb0Y7QUFDcEYsNkRBQTZEO0FBQzdELGtFQUE4RDtBQUM5RCw0RkFBdUY7QUFDdkYsc0VBQWtFO0FBRWxFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQW1DdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhDQUF1QjtnQkFDdkIsOEJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLHNEQUF3QjtnQkFDeEIsbURBQXVCO2dCQUN2QixxREFBd0I7YUFDM0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsa0NBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQix3Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCb3Jyb3dlclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2JvcnJvd2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Qm9ycm93ZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9ib3Jyb3dlci1saXN0L2JvcnJvd2VyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge05ld0JvcnJvd2VyTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbmV3LWJvcnJvd2VyLWxpc3QvbmV3LWJvcnJvd2VyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7QWRkVHJhbnNhY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2FkZC10cmFuc2FjdGlvbi9hZGQtdHJhbnNhY3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7RmlyZVN0b3JlU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvZmlyZXN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7Qm9ycm93ZXJEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9ib3Jyb3dlci1kZXRhaWxzL2JvcnJvd2VyLWRldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQge1RyYW5zYWN0aW9uU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvdHJhbnNhY3Rpb24uc2VydmljZVwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEJvcnJvd2VyTGlzdENvbXBvbmVudCxcbiAgICAgICAgTmV3Qm9ycm93ZXJMaXN0Q29tcG9uZW50LFxuICAgICAgICBBZGRUcmFuc2FjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQm9ycm93ZXJEZXRhaWxzQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIEJvcnJvd2VyU2VydmljZSxcbiAgICAgICAgQ29udGFjdFNlcnZpY2UsXG4gICAgICAgIEZpcmVTdG9yZVNlcnZpY2UsXG4gICAgICAgIFRyYW5zYWN0aW9uU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==