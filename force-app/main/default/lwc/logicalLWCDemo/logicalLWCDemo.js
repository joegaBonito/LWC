import { LightningElement,track } from 'lwc';

export default class LogicalLWCDemo extends LightningElement {
    @track greeting ='Hello';
    @track message;

    @track contacts = [
        {
            Id:'00345565454545656',
            Name: 'Joe Jung'
        },
        {
            Id:'00345565454545657',
            Name: 'Amit Singh'
        },
        {
            Id:'00345565454545658',
            Name: 'Ankit Singh'
        }
    ]
}