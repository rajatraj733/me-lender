"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_service_1 = require("../services/contact.service");
var transaction_1 = require("../entities/transaction");
var common_1 = require("@angular/common");
var borrower_service_1 = require("../services/borrower.service");
var transaction_service_1 = require("../services/transaction.service");
var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(route, contactService, borrowerService, transactionService) {
        this.route = route;
        this.contactService = contactService;
        this.borrowerService = borrowerService;
        this.transactionService = transactionService;
        this.amount = null;
        this.date = new Date();
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId = +this.route.snapshot.params["id"];
        this.mode = this.route.snapshot.params["mode"];
        this.contactService.getContactById(contactId).then(function (borrower) {
            _this.borrower = borrower;
        }).catch(function (error) {
            console.dir(error);
        });
        this.setAppeareances();
    };
    AddTransactionComponent.prototype.setAppeareances = function () {
        // let datePicker = <DatePicker> this.datePicker.nativeElement;
        // datePicker.android.setCalendarViewShown(true);
    };
    AddTransactionComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.date = this.date;
        datePicker.maxDate = new Date(2045, 12, 12);
        datePicker.minDate = new Date(2000, 1, 1);
    };
    AddTransactionComponent.prototype.addTransaction = function () {
        var transaction = new transaction_1.Transaction();
        transaction.borrower = this.borrower;
        transaction.amount = this.amount;
        transaction.date = new common_1.DatePipe('en').transform(this.date, 'yyyy-MM-dd');
        console.dir(transaction);
        this.transactionService.addTransaction(transaction, this.mode);
    };
    AddTransactionComponent.prototype.onDateChange = function (args) {
        this.date = args.value;
    };
    AddTransactionComponent = __decorate([
        core_1.Component({
            selector: 'ns-add-new-borrower',
            moduleId: module.id,
            templateUrl: './add-transaction.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            contact_service_1.ContactService,
            borrower_service_1.BorrowerService,
            transaction_service_1.TransactionService])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());
exports.AddTransactionComponent = AddTransactionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC10cmFuc2FjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsMENBQStDO0FBQy9DLCtEQUEyRDtBQUkzRCx1REFBb0Q7QUFDcEQsMENBQXlDO0FBQ3pDLGlFQUE2RDtBQUM3RCx1RUFBbUU7QUFPbkU7SUFLSSxpQ0FBb0IsS0FBcUIsRUFDckIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsa0JBQXNDO1FBSHRDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUwxRCxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBS3hCLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFrQjtZQUM5RCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsVUFBQyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNJLCtEQUErRDtRQUMvRCxpREFBaUQ7SUFDckQsQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxVQUFVLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELGdEQUFjLEdBQWQ7UUFDSSxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUN0QyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFDRCw4Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBN0NRLHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDO3lDQU02Qix1QkFBYztZQUNMLGdDQUFjO1lBQ2Isa0NBQWU7WUFDWix3Q0FBa0I7T0FSakQsdUJBQXVCLENBK0NuQztJQUFELDhCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtCb3Jyb3dlcn0gZnJvbSBcIi4uL2VudGl0aWVzL2JvcnJvd2VyXCI7XG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9lbnRpdGllcy90cmFuc2FjdGlvblwiO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtCb3Jyb3dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9ib3Jyb3dlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1RyYW5zYWN0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hZGQtbmV3LWJvcnJvd2VyJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZGQtdHJhbnNhY3Rpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRyYW5zYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgYm9ycm93ZXI6IEJvcnJvd2VyO1xuICAgIGFtb3VudDogbnVtYmVyID0gbnVsbDtcbiAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvcnJvd2VyU2VydmljZTogQm9ycm93ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFjdElkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wibW9kZVwiXTtcbiAgICAgICAgdGhpcy5jb250YWN0U2VydmljZS5nZXRDb250YWN0QnlJZChjb250YWN0SWQpLnRoZW4oKGJvcnJvd2VyOiBCb3Jyb3dlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXIgPSBib3Jyb3dlcjtcbiAgICAgICAgICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0QXBwZWFyZWFuY2VzKCk7XG4gICAgfVxuXG4gICAgc2V0QXBwZWFyZWFuY2VzKCkge1xuICAgICAgICAvLyBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPiB0aGlzLmRhdGVQaWNrZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgLy8gZGF0ZVBpY2tlci5hbmRyb2lkLnNldENhbGVuZGFyVmlld1Nob3duKHRydWUpO1xuICAgIH1cblxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3Mpe1xuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPiBhcmdzLm9iamVjdDtcbiAgICAgICAgZGF0ZVBpY2tlci5kYXRlID0gdGhpcy5kYXRlO1xuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCAxMiwgMTIpO1xuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgyMDAwLCAxLCAxKTtcbiAgICB9XG4gICAgYWRkVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKCk7XG4gICAgICAgIHRyYW5zYWN0aW9uLmJvcnJvd2VyID0gdGhpcy5ib3Jyb3dlcjtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gdGhpcy5hbW91bnQ7XG4gICAgICAgIHRyYW5zYWN0aW9uLmRhdGUgPSBuZXcgRGF0ZVBpcGUoJ2VuJykudHJhbnNmb3JtKHRoaXMuZGF0ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgY29uc29sZS5kaXIodHJhbnNhY3Rpb24pO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5hZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgdGhpcy5tb2RlKTtcblxuICAgIH1cbiAgICBvbkRhdGVDaGFuZ2UoYXJncykge1xuICAgICAgICB0aGlzLmRhdGUgPSBhcmdzLnZhbHVlO1xuICAgIH1cblxufSJdfQ==