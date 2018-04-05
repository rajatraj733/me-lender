"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var borrower_service_1 = require("../services/borrower.service");
var BorrowerListComponent = /** @class */ (function () {
    function BorrowerListComponent(borrowerService) {
        this.borrowerService = borrowerService;
    }
    BorrowerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.borrowerService.getBorrowerList().then(function (borrowers) {
            _this.borrowerList = borrowers;
            _this.displayedBorrowerList = _this.borrowerList;
            _this.sort(_this.displayedBorrowerList);
        });
    };
    BorrowerListComponent.prototype.sort = function (borrowers) {
        return borrowers.sort(function (a, b) { return a.amount > b.amount ? 1 : -1; });
    };
    BorrowerListComponent.prototype.filter = function (event) {
        var text = event.value;
        this.displayedBorrowerList = this.borrowerList.filter(function (value) {
            return value.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    };
    BorrowerListComponent = __decorate([
        core_1.Component({
            selector: 'ns-borrower-list',
            moduleId: module.id,
            templateUrl: './borrower-list.component.html'
        }),
        __metadata("design:paramtypes", [borrower_service_1.BorrowerService])
    ], BorrowerListComponent);
    return BorrowerListComponent;
}());
exports.BorrowerListComponent = BorrowerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3Jyb3dlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxpRUFBNkQ7QUFPN0Q7SUFJSSwrQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQXFCO1lBQzlELEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO1lBQy9DLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsb0NBQUksR0FBSixVQUFLLFNBQXFCO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBVyxFQUFFLENBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxzQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUNSLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBZTtZQUNsRSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUF6RCxDQUF5RCxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQXhCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FLdUMsa0NBQWU7T0FKM0MscUJBQXFCLENBMEJqQztJQUFELDRCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Qm9ycm93ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9ib3Jyb3dlclwiO1xuaW1wb3J0IHtCb3Jyb3dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9ib3Jyb3dlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYm9ycm93ZXItbGlzdCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm9ycm93ZXItbGlzdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQm9ycm93ZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGJvcnJvd2VyTGlzdDogQm9ycm93ZXJbXTtcbiAgICBwcml2YXRlIGRpc3BsYXllZEJvcnJvd2VyTGlzdDogQm9ycm93ZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYm9ycm93ZXJTZXJ2aWNlOiBCb3Jyb3dlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ib3Jyb3dlclNlcnZpY2UuZ2V0Qm9ycm93ZXJMaXN0KCkudGhlbigoYm9ycm93ZXJzOiBCb3Jyb3dlcltdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvcnJvd2VyTGlzdCA9IGJvcnJvd2VycztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQm9ycm93ZXJMaXN0ID0gdGhpcy5ib3Jyb3dlckxpc3Q7XG4gICAgICAgICAgICB0aGlzLnNvcnQodGhpcy5kaXNwbGF5ZWRCb3Jyb3dlckxpc3QpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNvcnQoYm9ycm93ZXJzOiBCb3Jyb3dlcltdKTogQm9ycm93ZXJbXSB7XG4gICAgICAgIHJldHVybiBib3Jyb3dlcnMuc29ydCgoYTogQm9ycm93ZXIsIGI6IEJvcnJvd2VyKSA9PiBhLmFtb3VudCA+IGIuYW1vdW50ID8gMSA6IC0xKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB0aGlzLmRpc3BsYXllZEJvcnJvd2VyTGlzdCA9IHRoaXMuYm9ycm93ZXJMaXN0LmZpbHRlcigodmFsdWU6IEJvcnJvd2VyKSA9PlxuICAgICAgICAgICAgdmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKTtcbiAgICB9XG5cbn0iXX0=