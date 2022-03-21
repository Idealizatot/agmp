import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/course';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {

  transform(value: Course[], word: string): Course[] {
    if (!word) {
      return value;
    }

    const lowerCaseWord = word.toLowerCase();
    
    return value.filter((item) => item.title.toLowerCase().includes(lowerCaseWord));
  }

}
