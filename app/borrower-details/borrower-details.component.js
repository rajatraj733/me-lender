"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var borrower_service_1 = require("../services/borrower.service");
var BorrowerDetailsComponent = /** @class */ (function () {
    function BorrowerDetailsComponent(route, borrowerService) {
        this.route = route;
        this.borrowerService = borrowerService;
    }
    BorrowerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId = +this.route.snapshot.params['id'];
        this.borrowerService.getBorrowerByContactId(contactId).then(function (borrower) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZXItZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3Jyb3dlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFnRDtBQUNoRCwwQ0FBK0M7QUFDL0MsaUVBQTZEO0FBTzFEO0lBR0Msa0NBQW9CLEtBQXFCLEVBQ3JCLGVBQWdDO1FBRGhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUdwRCxDQUFDO0lBQ0QsMkNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFrQjtZQUMzRSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUU3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBZFcsd0JBQXdCO1FBSnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBRzZCLHVCQUFjO1lBQ0osa0NBQWU7T0FKeEMsd0JBQXdCLENBZXZDO0lBQUQsK0JBQUM7Q0FBQSxBQWZFLElBZUY7QUFmZSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Qm9ycm93ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYm9ycm93ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtCb3Jyb3dlcn0gZnJvbSBcIi4uL2VudGl0aWVzL2JvcnJvd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYm9ycm93ZXItZGV0YWlscycsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm9ycm93ZXItZGV0YWlscy5jb21wb25lbnQuaHRtbCdcbn0pIGV4cG9ydCBjbGFzcyBCb3Jyb3dlckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgYm9ycm93ZXI6IEJvcnJvd2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib3Jyb3dlclNlcnZpY2U6IEJvcnJvd2VyU2VydmljZSkge1xuXG5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICAgICAgdGhpcy5ib3Jyb3dlclNlcnZpY2UuZ2V0Qm9ycm93ZXJCeUNvbnRhY3RJZChjb250YWN0SWQpLnRoZW4oKGJvcnJvd2VyOiBCb3Jyb3dlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib3Jyb3dlciA9IGJvcnJvd2VyO1xuXG4gICAgICAgIH0pLmNhdGNoKGU9Pntjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO30pO1xuICAgIH1cbn0iXX0=