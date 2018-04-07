"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_service_1 = require("./firestore.service");
var const_1 = require("../const");
var TransactionService = /** @class */ (function () {
    function TransactionService(firestoreService) {
        this.firestoreService = firestoreService;
    }
    TransactionService.prototype.addTransaction = function (transaction, mode) {
        transaction.amount = +transaction.amount;
        transaction.borrower.amount = +transaction.borrower.amount;
        if (mode === const_1.Const.mode.ADD_NEW) {
            return this.addNewBorrowerTransaction(transaction);
        }
        else if (mode === const_1.Const.mode.BORROWED) {
            return this.addBorrowingTransaction(transaction);
        }
        else if (mode === const_1.Const.mode.RETURNED) {
            return this.addReturningTransaction(transaction);
        }
    };
    TransactionService.prototype.addNewBorrowerTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestoreService.addBorrower(transaction.borrower).then(function (message) {
                console.log("TransactionService: " + message);
                _this.firestoreService.addTransaction(transaction).then(function (documnetRef) {
                    console.log("TransactionService: transaction added");
                    transaction.borrower.amount = transaction.amount;
                    _this.firestoreService.updateBorrower(transaction.borrower).then(function (msg) {
                        console.log(msg);
                        resolve();
                    }).catch(function (error) {
                        delete transaction.borrower.amount;
                        throw error;
                    });
                }).catch(function (error) {
                    throw error;
                });
            }).catch(function (error) {
                console.log('TransactionService: ' + error.message);
                reject(error);
            });
        });
    };
    TransactionService.prototype.addBorrowingTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestoreService.addTransaction(transaction).then(function (documentRef) {
                console.log('TransactionService: Borrowing Transaction Added!!');
                transaction.borrower.amount += transaction.amount;
                _this.firestoreService.updateBorrower(transaction.borrower).then(function (msg) {
                    console.log(msg);
                    resolve();
                }).catch(function (e) {
                    transaction.borrower.amount -= +transaction.amount;
                    throw e;
                });
            }).catch(function (e) {
                console.log('TransactionService: ' + e.message);
                reject(e);
            });
        });
    };
    TransactionService.prototype.addReturningTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            transaction.amount = (-1) * +transaction.amount;
            _this.firestoreService.addTransaction(transaction).then(function (documentRef) {
                console.log('TransactionService: Returning Transaction Added!!');
                transaction.borrower.amount += transaction.amount;
                var tempLastPaid = transaction.borrower.lastPaid;
                if (!transaction.borrower.lastPaid || transaction.date.localeCompare(transaction.borrower.lastPaid) === 1) {
                    transaction.borrower.lastPaid = transaction.date;
                }
                _this.firestoreService.updateBorrower(transaction.borrower).then(function (msg) {
                    console.log(msg);
                    resolve();
                }).catch(function (e) {
                    transaction.borrower.amount -= transaction.amount;
                    transaction.borrower.lastPaid = tempLastPaid;
                    throw e;
                });
            }).catch(function (e) {
                console.log('TransactionService: ' + e.message);
                reject(e);
            });
        });
    };
    TransactionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_service_1.FireStoreService])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMseURBQXFEO0FBRXJELGtDQUErQjtBQUkvQjtJQUNJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0RCxDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLFdBQXdCLEVBQUUsSUFBWTtRQUNqRCxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVELHNEQUF5QixHQUF6QixVQUEwQixXQUF3QjtRQUFsRCxpQkF1QkM7UUF0QkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMs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QUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBGUSxrQkFBa0I7UUFGOUIsaUJBQVUsRUFBRTt5Q0FHNkIsb0NBQWdCO09BRDdDLGtCQUFrQixDQXVGOUI7SUFBRCx5QkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RmlyZVN0b3JlU2VydmljZX0gZnJvbSBcIi4vZmlyZXN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9lbnRpdGllcy90cmFuc2FjdGlvblwiO1xuaW1wb3J0IHtDb25zdH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlc3RvcmVTZXJ2aWNlOiBGaXJlU3RvcmVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24sIG1vZGU6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9ICt0cmFuc2FjdGlvbi5hbW91bnQ7XG4gICAgICAgIHRyYW5zYWN0aW9uLmJvcnJvd2VyLmFtb3VudCA9ICt0cmFuc2FjdGlvbi5ib3Jyb3dlci5hbW91bnQ7XG4gICAgICAgIGlmIChtb2RlID09PSBDb25zdC5tb2RlLkFERF9ORVcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE5ld0JvcnJvd2VyVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IENvbnN0Lm1vZGUuQk9SUk9XRUQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEJvcnJvd2luZ1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBDb25zdC5tb2RlLlJFVFVSTkVEKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRSZXR1cm5pbmdUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGROZXdCb3Jyb3dlclRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuYWRkQm9ycm93ZXIodHJhbnNhY3Rpb24uYm9ycm93ZXIpLnRoZW4obWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uU2VydmljZTogJHttZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZXN0b3JlU2VydmljZS5hZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikudGhlbihkb2N1bW5ldFJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb25TZXJ2aWNlOiB0cmFuc2FjdGlvbiBhZGRlZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYm9ycm93ZXIuYW1vdW50ID0gdHJhbnNhY3Rpb24uYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLnVwZGF0ZUJvcnJvd2VyKHRyYW5zYWN0aW9uLmJvcnJvd2VyKS50aGVuKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhbnNhY3Rpb24uYm9ycm93ZXIuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNhY3Rpb25TZXJ2aWNlOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRCb3Jyb3dpbmdUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKS50aGVuKGRvY3VtZW50UmVmID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNhY3Rpb25TZXJ2aWNlOiBCb3Jyb3dpbmcgVHJhbnNhY3Rpb24gQWRkZWQhIScpO1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJvcnJvd2VyLmFtb3VudCArPSB0cmFuc2FjdGlvbi5hbW91bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLnVwZGF0ZUJvcnJvd2VyKHRyYW5zYWN0aW9uLmJvcnJvd2VyKS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYm9ycm93ZXIuYW1vdW50IC09ICt0cmFuc2FjdGlvbi5hbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNhY3Rpb25TZXJ2aWNlOiAnICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkUmV0dXJuaW5nVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9ICgtMSkgKiArdHJhbnNhY3Rpb24uYW1vdW50O1xuICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKS50aGVuKGRvY3VtZW50UmVmID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNhY3Rpb25TZXJ2aWNlOiBSZXR1cm5pbmcgVHJhbnNhY3Rpb24gQWRkZWQhIScpO1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJvcnJvd2VyLmFtb3VudCArPSB0cmFuc2FjdGlvbi5hbW91bnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcExhc3RQYWlkID0gdHJhbnNhY3Rpb24uYm9ycm93ZXIubGFzdFBhaWQ7XG4gICAgICAgICAgICAgICAgaWYoIXRyYW5zYWN0aW9uLmJvcnJvd2VyLmxhc3RQYWlkIHx8IHRyYW5zYWN0aW9uLmRhdGUubG9jYWxlQ29tcGFyZSh0cmFuc2FjdGlvbi5ib3Jyb3dlci5sYXN0UGFpZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYm9ycm93ZXIubGFzdFBhaWQgPSB0cmFuc2FjdGlvbi5kYXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVzdG9yZVNlcnZpY2UudXBkYXRlQm9ycm93ZXIodHJhbnNhY3Rpb24uYm9ycm93ZXIpLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5ib3Jyb3dlci5hbW91bnQgLT0gdHJhbnNhY3Rpb24uYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5ib3Jyb3dlci5sYXN0UGFpZCA9IHRlbXBMYXN0UGFpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvblNlcnZpY2U6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSJdfQ==