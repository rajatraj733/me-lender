"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_service_1 = require("../services/contact.service");
var transaction_1 = require("../entities/transaction");
var common_1 = require("@angular/common");
var borrower_service_1 = require("../services/borrower.service");
var transaction_service_1 = require("../services/transaction.service");
var const_1 = require("../const");
var dialogs = require("ui/dialogs");
var nativescript_angular_1 = require("nativescript-angular");
var activity_indicator_service_1 = require("../services/activity-indicator.service");
var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(route, contactService, transactionService, borrowerService, routerExtensions, activityIndicatorService) {
        this.route = route;
        this.contactService = contactService;
        this.transactionService = transactionService;
        this.borrowerService = borrowerService;
        this.routerExtensions = routerExtensions;
        this.activityIndicatorService = activityIndicatorService;
        this.amount = null;
        this.date = new Date();
        this.modeConst = const_1.Const.mode;
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params['name'];
        this.mode = this.route.snapshot.params["mode"];
        if (this.mode === const_1.Const.mode.ADD_NEW) {
            this.contactService.getContactByName(name).then(function (borrower) {
                _this.borrower = borrower;
            }).catch(function (error) {
                console.dir(error);
            });
        }
        else if (this.mode === const_1.Const.mode.RETURNED || this.mode === const_1.Const.mode.BORROWED) {
            this.borrowerService.getBorrowerByName(name).then(function (borrower) {
                _this.borrower = borrower;
            }).catch(function (e) { console.dir(e); });
        }
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
        var _this = this;
        var transaction = new transaction_1.Transaction();
        transaction.borrower = this.borrower;
        transaction.amount = this.amount;
        transaction.date = new common_1.DatePipe('en').transform(this.date, 'yyyy-MM-dd');
        transaction.comment = this.comment;
        console.dir(transaction);
        this.activityIndicatorService.showActivityIndicator();
        this.transactionService.addTransaction(transaction, this.mode).then(function () {
            _this.activityIndicatorService.hideActivityIndicator();
            dialogs.alert({
                title: 'Response',
                message: 'Transaction Added!!',
                okButtonText: 'Ok'
            }).then(function () {
                console.log('acknowledged by user');
                _this.routerExtensions.backToPreviousPage();
            });
        }).catch(function (e) {
            _this.activityIndicatorService.hideActivityIndicator();
            dialogs.alert({
                title: 'Error',
                message: e.message,
                okButtonText: 'Ok'
            }).then();
        });
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
            transaction_service_1.TransactionService,
            borrower_service_1.BorrowerService,
            nativescript_angular_1.RouterExtensions,
            activity_indicator_service_1.ActivityIndicatorService])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());
exports.AddTransactionComponent = AddTransactionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC10cmFuc2FjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsMENBQStDO0FBQy9DLCtEQUEyRDtBQUkzRCx1REFBb0Q7QUFDcEQsMENBQXlDO0FBQ3pDLGlFQUE2RDtBQUM3RCx1RUFBbUU7QUFDbkUsa0NBQStCO0FBQy9CLG9DQUFzQztBQUN0Qyw2REFBc0Q7QUFDdEQscUZBQWdGO0FBT2hGO0lBT0ksaUNBQW9CLEtBQXFCLEVBQ3JCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsd0JBQWtEO1FBTGxELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFUdEUsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQUcsYUFBSyxDQUFDLElBQUksQ0FBQztJQVF2QixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQUssQ0FBQyxJQUFJLENBQUMsT0FB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RUFBRSxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2dCQUNsQixZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDRCw4Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBMUVRLHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDO3lDQVE2Qix1QkFBYztZQUNMLGdDQUFjO1lBQ1Ysd0NBQWtCO1lBQ3JCLGtDQUFlO1lBQ2QsdUNBQWdCO1lBQ1IscURBQXdCO09BWjdELHVCQUF1QixDQTRFbkM7SUFBRCw4QkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Qm9ycm93ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9ib3Jyb3dlclwiO1xuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlscyc7XG5pbXBvcnQge1RyYW5zYWN0aW9ufSBmcm9tIFwiLi4vZW50aXRpZXMvdHJhbnNhY3Rpb25cIjtcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7Qm9ycm93ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYm9ycm93ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtUcmFuc2FjdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnN0fSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0FjdGl2aXR5SW5kaWNhdG9yU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjdGl2aXR5LWluZGljYXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYWRkLW5ldy1ib3Jyb3dlcicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZGRUcmFuc2FjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbW9kZTogc3RyaW5nO1xuICAgIGJvcnJvd2VyOiBCb3Jyb3dlcjtcbiAgICBhbW91bnQ6IG51bWJlciA9IG51bGw7XG4gICAgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbW9kZUNvbnN0ID0gQ29uc3QubW9kZTtcbiAgICBjb21tZW50OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvcnJvd2VyU2VydmljZTogQm9ycm93ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2aXR5SW5kaWNhdG9yU2VydmljZTogQWN0aXZpdHlJbmRpY2F0b3JTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snbmFtZSddO1xuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcIm1vZGVcIl07XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IENvbnN0Lm1vZGUuQUREX05FVykge1xuICAgICAgICAgICAgdGhpcy5jb250YWN0U2VydmljZS5nZXRDb250YWN0QnlOYW1lKG5hbWUpLnRoZW4oKGJvcnJvd2VyOiBCb3Jyb3dlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXIgPSBib3Jyb3dlcjtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubW9kZSA9PT0gQ29uc3QubW9kZS5SRVRVUk5FRCB8fCB0aGlzLm1vZGUgPT09IENvbnN0Lm1vZGUuQk9SUk9XRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJTZXJ2aWNlLmdldEJvcnJvd2VyQnlOYW1lKG5hbWUpLnRoZW4oKGJvcnJvd2VyOiBCb3Jyb3dlcikgPT4ge1xuICAgICAgICAgICAgICAgdGhpcy5ib3Jyb3dlciA9IGJvcnJvd2VyO1xuICAgICAgICAgICAgfSkuY2F0Y2goZSA9Pntjb25zb2xlLmRpcihlKTt9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEFwcGVhcmVhbmNlcygpO1xuICAgIH1cblxuICAgIHNldEFwcGVhcmVhbmNlcygpIHtcbiAgICAgICAgLy8gbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj4gdGhpcy5kYXRlUGlja2VyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIGRhdGVQaWNrZXIuYW5kcm9pZC5zZXRDYWxlbmRhclZpZXdTaG93bih0cnVlKTtcbiAgICB9XG5cbiAgICBvblBpY2tlckxvYWRlZChhcmdzKXtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj4gYXJncy5vYmplY3Q7XG4gICAgICAgIGRhdGVQaWNrZXIuZGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgMTIsIDEyKTtcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMjAwMCwgMSwgMSk7XG4gICAgfVxuICAgIGFkZFRyYW5zYWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpO1xuICAgICAgICB0cmFuc2FjdGlvbi5ib3Jyb3dlciA9IHRoaXMuYm9ycm93ZXI7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IHRoaXMuYW1vdW50O1xuICAgICAgICB0cmFuc2FjdGlvbi5kYXRlID0gbmV3IERhdGVQaXBlKCdlbicpLnRyYW5zZm9ybSh0aGlzLmRhdGUsICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHRyYW5zYWN0aW9uLmNvbW1lbnQgPSB0aGlzLmNvbW1lbnQ7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvclNlcnZpY2Uuc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCB0aGlzLm1vZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvclNlcnZpY2UuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Jlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb24gQWRkZWQhIScsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2snXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWNrbm93bGVkZ2VkIGJ5IHVzZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZSA9PntcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3JTZXJ2aWNlLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJ1xuICAgICAgICAgICAgfSkudGhlbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBvbkRhdGVDaGFuZ2UoYXJncykge1xuICAgICAgICB0aGlzLmRhdGUgPSBhcmdzLnZhbHVlO1xuICAgIH1cblxufSJdfQ==