import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../Models/person';
import PhoneService from '../phone.service';

@Component({
  selector: 'app-phoneform',
  templateUrl: './phoneform.component.html',
  styleUrls: ['./phoneform.component.css']
})
export class PhoneformComponent implements OnInit {
  @Output() newPersonAdded = new EventEmitter();

newPerson: Person;
message: string;
  constructor(private phoneService: PhoneService) {
    this.newPerson = new Person();
   }
   ngOnInit() {
  }

  addPerson() {
    if (this.newPerson.phoneNumber != null && this.newPerson.fullName != null){
      this.phoneService.addPerson(this.newPerson);
      this.newPersonAdded.emit(this.newPerson.fullName);
      this.clearForm();
    } else {
      this.message = 'Please try again!';
    }
  }

  clearForm(){
    this.newPerson = new Person();
  }

}

