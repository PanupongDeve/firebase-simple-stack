import { BehaviorSubject } from 'rxjs';


export class Counter {

    constructor(intialValue) {
        this.subject = new BehaviorSubject(intialValue)
    }

    subscribe = (callBackSubscribeValue) => {
        this.subject.subscribe({
            next: (value) => callBackSubscribeValue(value)
        })
    }

    publish = (value) => {
        this.subject.next(value);
    }

    getValue = () => {
        return this.subject.getValue();
    }
}