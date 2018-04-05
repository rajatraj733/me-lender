"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var borrower_service_1 = require("../services/borrower.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(borrowerService) {
        this.borrowerService = borrowerService;
        this.borrowerService.getNewBorrowerList().then();
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "ns-dashboard",
            moduleId: module.id,
            templateUrl: './dashboard.component.html'
        }),
        __metadata("design:paramtypes", [borrower_service_1.BorrowerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBd0M7QUFDeEMsaUVBQTZEO0FBTTFEO0lBQ0MsNEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUhZLGtCQUFrQjtRQUpsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzt5Q0FDdUMsa0NBQWU7T0FEdkMsa0JBQWtCLENBSWxDO0lBQUQseUJBQUM7Q0FBQSxBQUpFLElBSUY7QUFKZ0IsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCb3Jyb3dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9ib3Jyb3dlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRhc2hib2FyZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCdcbn0pIGV4cG9ydCAgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvcnJvd2VyU2VydmljZTogQm9ycm93ZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYm9ycm93ZXJTZXJ2aWNlLmdldE5ld0JvcnJvd2VyTGlzdCgpLnRoZW4oKTtcbiAgICB9XG59Il19