import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../Models/person';
import PhoneService from '../phone.service';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.css']
})
export class PersoncardComponent implements OnInit {
  @Input() item: Person;
  @Output() itemToDelete = new EventEmitter();
  @Output() refreshList = new EventEmitter();

  editmode: boolean;
  idtochange: number;
  editPerson: Person;
  errMessage: string;
  constructor(private service: PhoneService) {
    this.editmode = false;
    this.editPerson = new Person();
  }

  ngOnInit() {
  }

  DeleteItem(item) {
    this.itemToDelete.emit(item);
  }

  editInfo(id){
    if (this.editPerson.fullName != null && this.editPerson.phoneNumber != null){
    this.service.editInfo(id, this.editPerson);
    this.refreshList.emit(this.editPerson.fullName);
    this.editmode = false;
    } else {
      this.errMessage = 'Plese fill the edit info correctly!';
    }
  }

}
