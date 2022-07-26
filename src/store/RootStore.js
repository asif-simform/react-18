import Count from  '../models/Counter';

export default class RootStore {
    count;

    constructor(){
        this.count = new Count();
    }
}