import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../course'

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Course[], ...args: unknown[]): Course[] {
    return value.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
  }

}
