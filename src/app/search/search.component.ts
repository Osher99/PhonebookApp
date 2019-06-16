import { Component, OnInit } from '@angular/core';
import PhoneService from '../phone.service';
import { Person } from '../Models/person';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchVal: string;
  listofSearched: Array<Person>;
  phoneRadio: any;
  nameRadio: any;
  errMessage: string;

  constructor(private service: PhoneService) { }

  search(){
    if (this.phoneRadio != null) {
      this.listofSearched = this.service.getPersonByPhone(this.searchVal);
    } else {
      this.listofSearched = this.service.getPersonByName(this.searchVal);
    }
    if (this.listofSearched.length === 0){
      this.errMessage = 'Person not found!';
    }
    if (this.listofSearched.length < 0){
      this.errMessage = 'Person(s) found!';
    }
    this.searchVal = null;
  }

  clearForm(){
    this.listofSearched = null;
    this.errMessage = null;
    this.searchVal = null;
  }


  ngOnInit() {
  }

}
