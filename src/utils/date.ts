import { format } from 'date-fns'

const template = 'yyyy-MM-dd';
export const getDateFromString = (_value: string | Date): Date => {
    return new Date(_value);
}
export const getCurrentDate = (): Date => {
    return new Date;
}

export const formatedDate = (_value: Date, _template: string = template) => {
    return format(_value, _template);
} 