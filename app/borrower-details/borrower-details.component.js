"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var borrower_service_1 = require("../services/borrower.service");
var const_1 = require("../const");
var BorrowerDetailsComponent = /** @class */ (function () {
    function BorrowerDetailsComponent(route, borrowerService) {
        this.route = route;
        this.borrowerService = borrowerService;
        this.mode = const_1.Const.mode;
    }
    BorrowerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params['name'];
        this.borrowerService.getBorrowerByName(name).then(function (borrower) {
            _this.borrower = borrower;
        }).catch(function (e) { console.log(e.message); });
    };
    BorrowerDetailsComponent = __decorate([
        core_1.Component({
            selector: 'ns-borrower-details',
            moduleId: module.id,
            templateUrl: './borrower-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            borrower_service_1.BorrowerService])
    ], BorrowerDetailsComponent);
    return BorrowerDetailsComponent;
}());
exports.BorrowerDetailsComponent = BorrowerDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZXItZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3Jyb3dlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFnRDtBQUNoRCwwQ0FBK0M7QUFDL0MsaUVBQTZEO0FBRTdELGtDQUErQjtBQU01QjtJQUdDLGtDQUFvQixLQUFxQixFQUNyQixlQUFnQztRQURoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGcEQsU0FBSSxHQUFHLGFBQUssQ0FBQyxJQUFJLENBQUM7SUFLbEIsQ0FBQztJQUNELDJDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWtCO1lBQ2pFLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFkVyx3QkFBd0I7UUFKdkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FHNkIsdUJBQWM7WUFDSixrQ0FBZTtPQUp4Qyx3QkFBd0IsQ0FldkM7SUFBRCwrQkFBQztDQUFBLEFBZkUsSUFlRjtBQWZlLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtCb3Jyb3dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9ib3Jyb3dlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0JvcnJvd2VyfSBmcm9tIFwiLi4vZW50aXRpZXMvYm9ycm93ZXJcIjtcbmltcG9ydCB7Q29uc3R9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWJvcnJvd2VyLWRldGFpbHMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JvcnJvd2VyLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnXG59KSBleHBvcnQgY2xhc3MgQm9ycm93ZXJEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGJvcnJvd2VyOiBCb3Jyb3dlcjtcbiAgICBtb2RlID0gQ29uc3QubW9kZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvcnJvd2VyU2VydmljZTogQm9ycm93ZXJTZXJ2aWNlKSB7XG5cblxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWyduYW1lJ107XG4gICAgICAgIHRoaXMuYm9ycm93ZXJTZXJ2aWNlLmdldEJvcnJvd2VyQnlOYW1lKG5hbWUpLnRoZW4oKGJvcnJvd2VyOiBCb3Jyb3dlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib3Jyb3dlciA9IGJvcnJvd2VyO1xuXG4gICAgICAgIH0pLmNhdGNoKGU9Pntjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO30pO1xuICAgIH1cbn0iXX0=