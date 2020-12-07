export class Datetime {
    static getDate(value: any): Date {
        return new Date(value);
    }
    static getCurrentDate(): Date {
        return new Date;
    }
}