import { LightningElement, track, wire } from 'lwc';
import NAME_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
import getContactList from '@salesforce/apex/ContactController.contactList';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  @track name = NAME_Field;
  @track objName = sObjectName;
  @wire(getContactList) contat;


  contacts =[
      {
          Id:"003897283",
          Name:"Amit Singh",
          Title:"CRM Consultant"
      },
      {
        Id:"003897284",
        Name:"Ankit Singh",
        Title:"CRM Developer"
      },
  ];
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}