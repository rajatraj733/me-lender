export class Borrower {
    contactId: number;
    name: string;
    amount: number;
    lastPaid: string;
    source: string;
    phone: string[];

    constructor(contactId?: number, name?: string, phone?: string[], source?: string) {
        this.contactId = contactId;
        this.name = name;
        this.phone = phone;
        this.source = source;
    }

    static isValidPhone(phone: string): boolean {
        const i = phone.indexOf('+91');
        return i !== -1;
    }

    static convertToValidPhone(phone: string): string {
        if (phone.length === 10) {
            return '+91' + phone;
        } else if (phone.length === 11 && phone.indexOf('0') === 0) {
            return '+91' + phone.substring(1);
        } else {
            return 'bad phone no';
        }
    }
}