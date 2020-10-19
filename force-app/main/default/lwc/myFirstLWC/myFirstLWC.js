import { api, LightningElement, track } from 'lwc';
import id from '@salesforce/user/Id';

export default class MyFirstLWC extends LightningElement {
    @api name;
    @track title = 'Salesforce Dev';
    phone = '9902839192';
    email = 'joejung5678@gmail.com';
    userId = id;

    handleClick(){
        /* eslint-disable no-console */
        console.log('I am inside JS file');
        this.name = 'Joe Jung';
        this.title = 'Salesforce Admin';
    }
}