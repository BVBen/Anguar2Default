import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'noValue' })
export class NoValuePipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        if (value || value === 0) {
            return value;
        } else {
            return "-";
        }
    }
}