"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_service_1 = require("../services/contact.service");
var borrower_service_1 = require("../services/borrower.service");
var const_1 = require("../const");
var NewBorrowerListComponent = /** @class */ (function () {
    function NewBorrowerListComponent(contactService, borrowerService) {
        this.contactService = contactService;
        this.borrowerService = borrowerService;
        this.mode = const_1.Const.mode;
        this.source = const_1.Const.source;
        this.templateSelector = function (item, index, items) {
            return item.source;
        };
    }
    NewBorrowerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.borrowerService.getNewBorrowerList().then(function (borrowers) {
            _this.originalBorrowerList = borrowers;
            _this.displayedBorrowerList = _this.originalBorrowerList;
        });
    };
    NewBorrowerListComponent.prototype.filter = function (event) {
        var text = event.value;
        this.displayedBorrowerList = this.originalBorrowerList.filter(function (value) {
            return value.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    };
    NewBorrowerListComponent = __decorate([
        core_1.Component({
            selector: 'ns-new-borrower-list',
            moduleId: module.id,
            templateUrl: './new-borrower-list.component.html'
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService,
            borrower_service_1.BorrowerService])
    ], NewBorrowerListComponent);
    return NewBorrowerListComponent;
}());
exports.NewBorrowerListComponent = NewBorrowerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWJvcnJvd2VyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LWJvcnJvd2VyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0NBQWdEO0FBQ2hELCtEQUEyRDtBQUUzRCxpRUFBNkQ7QUFDN0Qsa0NBQStCO0FBTzVCO0lBV0Msa0NBQW9CLGNBQThCLEVBQzlCLGVBQWdDO1FBRGhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFQcEQsU0FBSSxHQUFHLGFBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEIsV0FBTSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxVQUFDLElBQWMsRUFBRSxLQUFhLEVBQUUsS0FBVTtZQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUE7SUFHc0QsQ0FBQztJQUV4RCwyQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBcUI7WUFDakUsS0FBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztZQUN0QyxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQWU7WUFDMUUsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBekQsQ0FBeUQsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUF6Qlcsd0JBQXdCO1FBSnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7eUNBV3NDLGdDQUFjO1lBQ2Isa0NBQWU7T0FaeEMsd0JBQXdCLENBMkJ2QztJQUFELCtCQUFDO0NBQUEsQUEzQkUsSUEyQkY7QUEzQmUsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnRhY3Quc2VydmljZSc7XG5pbXBvcnQge0JvcnJvd2VyfSBmcm9tICcuLi9lbnRpdGllcy9ib3Jyb3dlcic7XG5pbXBvcnQge0JvcnJvd2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2JvcnJvd2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uc3R9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtbmV3LWJvcnJvd2VyLWxpc3QnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25ldy1ib3Jyb3dlci1saXN0LmNvbXBvbmVudC5odG1sJ1xufSkgZXhwb3J0IGNsYXNzIE5ld0JvcnJvd2VyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuXG4gICAgb3JpZ2luYWxCb3Jyb3dlckxpc3Q6IEJvcnJvd2VyW107XG4gICAgZGlzcGxheWVkQm9ycm93ZXJMaXN0OiBCb3Jyb3dlcltdO1xuICAgIG1vZGUgPSBDb25zdC5tb2RlO1xuICAgIHNvdXJjZSA9IENvbnN0LnNvdXJjZTtcbiAgICBwdWJsaWMgdGVtcGxhdGVTZWxlY3RvciA9IChpdGVtOiBCb3Jyb3dlciwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5zb3VyY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib3Jyb3dlclNlcnZpY2U6IEJvcnJvd2VyU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvcnJvd2VyU2VydmljZS5nZXROZXdCb3Jyb3dlckxpc3QoKS50aGVuKChib3Jyb3dlcnM6IEJvcnJvd2VyW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxCb3Jyb3dlckxpc3QgPSBib3Jyb3dlcnM7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZEJvcnJvd2VyTGlzdCA9IHRoaXMub3JpZ2luYWxCb3Jyb3dlckxpc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlcihldmVudCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gZXZlbnQudmFsdWU7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQm9ycm93ZXJMaXN0ID0gdGhpcy5vcmlnaW5hbEJvcnJvd2VyTGlzdC5maWx0ZXIoKHZhbHVlOiBCb3Jyb3dlcikgPT5cbiAgICAgICAgICAgIHZhbHVlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gICAgfVxuXG59Il19