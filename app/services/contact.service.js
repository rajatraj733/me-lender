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
    ContactService.prototype.getContactByName = function (name) {
        return this.getContacts().then(function (borrowers) {
            for (var _i = 0, borrowers_1 = borrowers; _i < borrowers_1.length; _i++) {
                var borrower = borrowers_1[_i];
                if (borrower.name === name) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHFEQUF1RDtBQUN2RCxpREFBOEM7QUFFOUMsa0NBQWdDO0FBQ2hDLGlDQUErQjtBQUMvQiwyQ0FBeUM7QUFDekMsa0NBQStCO0FBRy9CO0lBREE7UUFJSSxrQkFBYSxHQUFHO1lBQ1osY0FBYztZQUNkLE9BQU87WUFDUCxPQUFPO1NBQ1YsQ0FBQztJQTBETixDQUFDO0lBeERHLG9DQUFXLEdBQVg7UUFBQSxpQkFnQkM7UUFmRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNuRSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsVUFBQyxLQUFLO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBcUI7WUFDakQsR0FBRyxDQUFBLENBQW1CLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUztnQkFBM0IsSUFBTSxRQUFRLGtCQUFBO2dCQUNkLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR08sK0NBQXNCLEdBQTlCLFVBQStCLFFBQVE7UUFDbkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQSxDQUFrQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVE7WUFBekIsSUFBTSxPQUFPLGlCQUFBO1lBQ2IsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUM5QixJQUFNLE1BQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2xDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLENBQWdCLFVBQWEsRUFBYixLQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQWIsY0FBYSxFQUFiLElBQWE7b0JBQTVCLElBQU0sS0FBSyxTQUFBO29CQUNaLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEMsT0FBTyxHQUFHLG1CQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BELENBQUM7d0JBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0wsQ0FBQztpQkFDSjtZQUNMLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBSSxFQUFFLE1BQU0sRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQztTQUNKO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVcsRUFBRSxDQUFXLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFoRVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQWlFMUI7SUFBRCxxQkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgQ29udGFjdHMgZnJvbSAnbmF0aXZlc2NyaXB0LWNvbnRhY3RzLWxpdGUnO1xuaW1wb3J0IHtCb3Jyb3dlcn0gZnJvbSBcIi4uL2VudGl0aWVzL2JvcnJvd2VyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiO1xuaW1wb3J0IHtDb25zdH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XG4gICAgYm9ycm93ZXJzOiBCb3Jyb3dlcltdO1xuICAgIGJvcnJvd2VycyQ6IFByb21pc2U8Qm9ycm93ZXJbXT47XG4gICAgZGVzaXJlZEZpZWxkcyA9IFtcbiAgICAgICAgJ2Rpc3BsYXlfbmFtZScsXG4gICAgICAgICdlbWFpbCcsXG4gICAgICAgICdwaG9uZSdcbiAgICBdO1xuXG4gICAgZ2V0Q29udGFjdHMoKTogUHJvbWlzZTxCb3Jyb3dlcltdPiB7XG4gICAgICAgIGlmICh0aGlzLmJvcnJvd2VycyAmJiB0aGlzLmJvcnJvd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYm9ycm93ZXJzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvcnJvd2VycyQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvcnJvd2VycyQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvcnJvd2VycyQgPSBDb250YWN0cy5nZXRDb250YWN0cyh0aGlzLmRlc2lyZWRGaWVsZHMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJzID0gdGhpcy5wYXJzZUNvbnRhY3RUb0JvcnJvd2VyKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWxsIHRoZSBjb250YWN0c1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib3Jyb3dlcnM7XG4gICAgICAgICAgICB9KS5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9ycm93ZXJzJDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRhY3RCeU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxCb3Jyb3dlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWN0cygpLnRoZW4oKGJvcnJvd2VyczogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICAgZm9yKGNvbnN0IGJvcnJvd2VyIG9mIGJvcnJvd2Vycykge1xuICAgICAgICAgICAgICAgIGlmKGJvcnJvd2VyLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvcnJvd2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHBhcnNlQ29udGFjdFRvQm9ycm93ZXIoY29udGFjdHMpOiBCb3Jyb3dlcltdIHtcbiAgICAgICAgY29uc3QgYm9ycm93ZXJzID0gW107XG4gICAgICAgIGZvcihjb25zdCBjb250YWN0IG9mIGNvbnRhY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbnRhY3QuY29udGFjdF9pZDtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjb250YWN0LmRpc3BsYXlfbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHBob25lcyA9IFtdO1xuICAgICAgICAgICAgaWYgKGNvbnRhY3QucGhvbmUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBob25lIG9mIGNvbnRhY3QucGhvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lLmFjY291bnRfbmFtZS5pbmRleE9mKCdnbWFpbCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lTm8gPSBwaG9uZS5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU5vID0gcGhvbmVOby5yZXBsYWNlKC8gL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQm9ycm93ZXIuaXNWYWxpZFBob25lKHBob25lTm8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVObyA9IEJvcnJvd2VyLmNvbnZlcnRUb1ZhbGlkUGhvbmUocGhvbmVObyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmVzLmluZGV4T2YocGhvbmVObykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVzLnB1c2gocGhvbmVObyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwaG9uZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYm9ycm93ZXJzLnB1c2gobmV3IEJvcnJvd2VyKGlkLCBuYW1lLCBwaG9uZXMsIENvbnN0LnNvdXJjZS5DT05UQUNUKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9ycm93ZXJzLnNvcnQoKGE6IEJvcnJvd2VyLCBiOiBCb3Jyb3dlcikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgICAgIHJldHVybiBib3Jyb3dlcnM7XG4gICAgfVxufSJdfQ==