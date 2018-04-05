"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Contacts = require("nativescript-contacts-lite");
var borrower_1 = require("../entities/borrower");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/observable/fromPromise");
var const_1 = require("../const");
var ContactService = /** @class */ (function () {
    function ContactService() {
        this.desiredFields = [
            'display_name',
            'email',
            'phone'
        ];
    }
    ContactService.prototype.getContacts = function () {
        var _this = this;
        if (this.borrowers && this.borrowers.length > 0) {
            return Promise.resolve(this.borrowers);
        }
        else if (this.borrowers$) {
            return this.borrowers$;
        }
        else {
            this.borrowers$ = Contacts.getContacts(this.desiredFields).then(function (result) {
                _this.borrowers = _this.parseContactToBorrower(result);
                console.log("got all the contacts");
                return _this.borrowers;
            }).catch(function (error) {
                console.dir(error);
                return error;
            });
            return this.borrowers$;
        }
    };
    ContactService.prototype.getContactById = function (id) {
        return this.getContacts().then(function (borrowers) {
            for (var _i = 0, borrowers_1 = borrowers; _i < borrowers_1.length; _i++) {
                var borrower = borrowers_1[_i];
                if (borrower.contactId === id) {
                    return borrower;
                }
            }
        });
    };
    ContactService.prototype.parseContactToBorrower = function (contacts) {
        var borrowers = [];
        for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
            var contact = contacts_1[_i];
            var id = contact.contact_id;
            var name_1 = contact.display_name;
            var phones = [];
            if (contact.phone) {
                for (var _a = 0, _b = contact.phone; _a < _b.length; _a++) {
                    var phone = _b[_a];
                    if (phone.account_name.indexOf('gmail') !== -1) {
                        var phoneNo = phone.number;
                        phoneNo = phoneNo.replace(/ /g, '');
                        if (!borrower_1.Borrower.isValidPhone(phoneNo)) {
                            phoneNo = borrower_1.Borrower.convertToValidPhone(phoneNo);
                        }
                        if (phones.indexOf(phoneNo) === -1) {
                            phones.push(phoneNo);
                        }
                    }
                }
            }
            if (phones.length) {
                borrowers.push(new borrower_1.Borrower(id, name_1, phones, const_1.Const.source.CONTACT));
            }
        }
        borrowers.sort(function (a, b) { return a.name.localeCompare(b.name); });
        return borrowers;
    };
    ContactService = __decorate([
        core_1.Injectable()
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHFEQUF1RDtBQUN2RCxpREFBOEM7QUFFOUMsa0NBQWdDO0FBQ2hDLGlDQUErQjtBQUMvQiwyQ0FBeUM7QUFDekMsa0NBQStCO0FBRy9CO0lBREE7UUFJSSxrQkFBYSxHQUFHO1lBQ1osY0FBYztZQUNkLE9BQU87WUFDUCxPQUFPO1NBQ1YsQ0FBQztJQTBETixDQUFDO0lBeERHLG9DQUFXLEdBQVg7UUFBQSxpQkFnQkM7UUFmRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNuRSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsVUFBQyxLQUFLO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENB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Z3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgQ29udGFjdHMgZnJvbSAnbmF0aXZlc2NyaXB0LWNvbnRhY3RzLWxpdGUnO1xuaW1wb3J0IHtCb3Jyb3dlcn0gZnJvbSBcIi4uL2VudGl0aWVzL2JvcnJvd2VyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiO1xuaW1wb3J0IHtDb25zdH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XG4gICAgYm9ycm93ZXJzOiBCb3Jyb3dlcltdO1xuICAgIGJvcnJvd2VycyQ6IFByb21pc2U8Qm9ycm93ZXJbXT47XG4gICAgZGVzaXJlZEZpZWxkcyA9IFtcbiAgICAgICAgJ2Rpc3BsYXlfbmFtZScsXG4gICAgICAgICdlbWFpbCcsXG4gICAgICAgICdwaG9uZSdcbiAgICBdO1xuXG4gICAgZ2V0Q29udGFjdHMoKTogUHJvbWlzZTxCb3Jyb3dlcltdPiB7XG4gICAgICAgIGlmICh0aGlzLmJvcnJvd2VycyAmJiB0aGlzLmJvcnJvd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYm9ycm93ZXJzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvcnJvd2VycyQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvcnJvd2VycyQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvcnJvd2VycyQgPSBDb250YWN0cy5nZXRDb250YWN0cyh0aGlzLmRlc2lyZWRGaWVsZHMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJzID0gdGhpcy5wYXJzZUNvbnRhY3RUb0JvcnJvd2VyKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWxsIHRoZSBjb250YWN0c1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib3Jyb3dlcnM7XG4gICAgICAgICAgICB9KS5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9ycm93ZXJzJDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRhY3RCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPEJvcnJvd2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhY3RzKCkudGhlbigoYm9ycm93ZXJzOiBCb3Jyb3dlcltdKSA9PiB7XG4gICAgICAgICAgICBmb3IoY29uc3QgYm9ycm93ZXIgb2YgYm9ycm93ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9ycm93ZXIuY29udGFjdElkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9ycm93ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcGFyc2VDb250YWN0VG9Cb3Jyb3dlcihjb250YWN0cyk6IEJvcnJvd2VyW10ge1xuICAgICAgICBjb25zdCBib3Jyb3dlcnMgPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IGNvbnRhY3Qgb2YgY29udGFjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29udGFjdC5jb250YWN0X2lkO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNvbnRhY3QuZGlzcGxheV9uYW1lO1xuICAgICAgICAgICAgY29uc3QgcGhvbmVzID0gW107XG4gICAgICAgICAgICBpZiAoY29udGFjdC5waG9uZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGhvbmUgb2YgY29udGFjdC5waG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmUuYWNjb3VudF9uYW1lLmluZGV4T2YoJ2dtYWlsJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVObyA9IHBob25lLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTm8gPSBwaG9uZU5vLnJlcGxhY2UoLyAvZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFCb3Jyb3dlci5pc1ZhbGlkUGhvbmUocGhvbmVObykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU5vID0gQm9ycm93ZXIuY29udmVydFRvVmFsaWRQaG9uZShwaG9uZU5vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZXMuaW5kZXhPZihwaG9uZU5vKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZXMucHVzaChwaG9uZU5vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBob25lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBib3Jyb3dlcnMucHVzaChuZXcgQm9ycm93ZXIoaWQsIG5hbWUsIHBob25lcywgQ29uc3Quc291cmNlLkNPTlRBQ1QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib3Jyb3dlcnMuc29ydCgoYTogQm9ycm93ZXIsIGI6IEJvcnJvd2VyKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgICAgICAgcmV0dXJuIGJvcnJvd2VycztcbiAgICB9XG59Il19