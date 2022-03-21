import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.onSearch.emit(this.searchText);
    console.log(this.searchText)
  }

}
