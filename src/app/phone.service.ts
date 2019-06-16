import { Injectable } from '@angular/core';
import { Person } from './Models/person';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export default  class PhoneService {
    nextId: number;

    constructor() {
        const persons = this.getList();

        if (persons.length === 0) {
            this.nextId = 0;
        } else {
            const maxId = persons[persons.length - 1].id;
            this.nextId = maxId + 1;
        }
    }

    removePerson(person: Person){
        const persons = this.getList();
        const indextoRemove = persons.indexOf(person);
        persons.splice(indextoRemove, 1);
        this.setLocalStoragePersons(persons);

    }

    addPerson(person: Person) {
        const persons = this.getList();
        person.id = this.nextId;
        persons.push(person);
        this.setLocalStoragePersons(persons);
        this.nextId++;
    }

    getList(){
        const localStorageItem = JSON.parse(localStorage.getItem('persons'));
        return localStorageItem == null ? [] : localStorageItem.persons;
    }

    isEmpty(){
        if (this.getList().length === 0) {
        return true;
    }
        return false;
    }

    editInfo(id: number, person: Person){
      const persons = this.getList();
      const persontoEdit = persons.find(x => x.id === id);
      const index  = persons.indexOf(persontoEdit);
      persontoEdit.fullName = person.fullName;
      persontoEdit.phoneNumber = person.phoneNumber;
      persons[index] = persontoEdit;
      this.setLocalStoragePersons(persons);
    }

    getPersonByPhone(phoneNum: string) {
      const persons = this.getList();
      return persons.filter(x => x.phoneNumber === phoneNum);
    }

    getPersonByName(name: string) {
      const persons = this.getList();
      return persons.filter(x => x.fullName.toLowerCase() === name.toLowerCase());
    }
    private setLocalStoragePersons(persons: Person[]): void {
        localStorage.setItem('persons', JSON.stringify({ persons : persons}));
    }


  }
