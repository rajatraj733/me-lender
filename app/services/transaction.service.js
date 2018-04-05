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
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (mode === const_1.Const.mode.ADD_NEW) {
                _this.firestoreService.addBorrower(transaction.borrower).then(function (message) {
                    console.log("TransactionService: " + message);
                    _this.firestoreService.addTransaction(transaction).then(function (documnetRef) {
                        console.log("TransactionService: transaction added");
                        transaction.borrower.amount = transaction.amount;
                        _this.firestoreService.updateBorrower(transaction.borrower).then(function (msg) {
                            console.log(msg);
                            resolve();
                        }).catch(function (error) {
                            delete transaction.borrower.lastPaid;
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
            }
        });
    };
    TransactionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_service_1.FireStoreService])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxzQ0FBeUM7QUFDekMseURBQXFEO0FBRXJELGtDQUErQjtBQUkvQjtJQUNJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0RCxDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLFdBQXdCLEVBQUUsSUFBWTtRQUFyRCxpQkEwQkM7UUF6QkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGFBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztvQkFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsT0FBUyxDQUFDLENBQUM7b0JBQzlDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVzt3QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO3dCQUNyRCxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO3dCQUNqRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHOzRCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixPQUFPLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLOzRCQUNWLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7NEJBQ3JDLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NEJBQ25DLE1BQU0sS0FBSyxDQUFDO3dCQUNoQixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO3dCQUNULE1BQU0sS0FBSyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9CUSxrQkFBa0I7UUFGOUIsaUJBQVUsRUFBRTt5Q0FHNkIsb0NBQWdCO09BRDdDLGtCQUFrQixDQWtDOUI7SUFBRCx5QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RmlyZVN0b3JlU2VydmljZX0gZnJvbSBcIi4vZmlyZXN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9lbnRpdGllcy90cmFuc2FjdGlvblwiO1xuaW1wb3J0IHtDb25zdH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlc3RvcmVTZXJ2aWNlOiBGaXJlU3RvcmVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24sIG1vZGU6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gQ29uc3QubW9kZS5BRERfTkVXKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmFkZEJvcnJvd2VyKHRyYW5zYWN0aW9uLmJvcnJvd2VyKS50aGVuKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb25TZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZXN0b3JlU2VydmljZS5hZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikudGhlbihkb2N1bW5ldFJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uU2VydmljZTogdHJhbnNhY3Rpb24gYWRkZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5ib3Jyb3dlci5hbW91bnQgPSB0cmFuc2FjdGlvbi5hbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLnVwZGF0ZUJvcnJvd2VyKHRyYW5zYWN0aW9uLmJvcnJvd2VyKS50aGVuKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRyYW5zYWN0aW9uLmJvcnJvd2VyLmxhc3RQYWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhbnNhY3Rpb24uYm9ycm93ZXIuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvblNlcnZpY2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0iXX0=