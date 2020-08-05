import { Counter } from '../dataSources/dataStream/Counter';


class CounterUsecase {

    constructor() {
        this.counter = new Counter(0);
    }


    subscribeValue(callbackSub) {
        this.counter.subscribe(callbackSub);
    }


    increase(value) {
        let currentValue = this.counter.getValue();
        let updatedValue = currentValue + value;
        this.counter.publish(updatedValue);
    }

    decrease(value) {
        let currentValue = this.counter.getValue();
        let updatedValue = currentValue - value;
        this.counter.publish(updatedValue);
    }

    getValue() {
        return this.counter.getValue();
    }
}

const getInstance = () => {
    let instance = null;

    if (instance === null) {
        instance = new CounterUsecase();
    }

    return instance;
}

export const counterUsecase = getInstance();