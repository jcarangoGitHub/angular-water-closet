import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
import {Person} from '../../model/person';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  person : Person
  constructor(private personService: PersonService) { }

  ngOnInit() {    
    this.person = new Person()
  }

  onSubmit(person: Person) {
    this.personService.newPerson(person)
      .subscribe(person => {this.person = person})
  }

  clearSubscription() {
    this.person = new Person();
  }

}
