import { Observable } from './Observable';

export class Count {
    counter;

    constructor(){
        this.counter = 0;
        this.observable = new Observable();
        this.observable.subscribe(this.getCount);
    }
    
    getCount = () => {
        return this.counter;
    }

    incriment = () => {
        this.counter = ++this.counter;
        this.observable.notify(this.counter)
    }

    decriment = () => {
        this.counter = --this.counter;
        this.observable.notify(this.counter)
    }
}

export default Count;