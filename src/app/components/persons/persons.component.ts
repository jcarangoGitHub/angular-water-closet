import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  person: Person = {
    typeId: 'CC',
    id: 1,
    firstName: 'Norman',
    lastName: 'Arango',
    celNumber: 3030202,
    email: 'norman@wc.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
