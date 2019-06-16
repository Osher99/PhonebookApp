import { Component, OnInit, Directive } from '@angular/core';
import PhoneService from '../phone.service';
import { Person } from '../Models/person';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})

export class PersonlistComponent implements OnInit {

  listOfPersons = Array<Person>();
  Message: string;
  constructor(private service: PhoneService) {
    this.listOfPersons = this.service.getList();
    this.Message = '';
  }

  ngOnInit() {
  }

  itemToDelete(item) {
    this.service.removePerson(item);
    this.listOfPersons = this.service.getList();
    this.Message = 'Item deleted successfully!';
}

  personAdded(event){
    this.Message = event + ' has added!';
    this.listOfPersons = this.service.getList();
  }

  refreshList(event){
    this.Message = event + ' has changed!';
    this.listOfPersons = this.service.getList();
  }

  downloadPhoneBook() {
    const doc = new jsPDF();
    let listCompleted = '';
    this.listOfPersons.forEach(element => {
      listCompleted += element.fullName + ' ' + element.phoneNumber + '\n\n';
    });
    doc.text(listCompleted, 10, 10);
    doc.save('PhoneBook.pdf');
  }
}
